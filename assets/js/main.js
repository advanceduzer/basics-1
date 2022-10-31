import { timeConverter, padTo2Digits } from '/assets/js/time.js';

document.addEventListener("DOMContentLoaded", function (event) {


    const form = document.querySelector(`form`);
    const wrapper = document.querySelector('.wrapper');
    const nowTemperature = document.querySelector(".nowTemperature i");
    const nowCity = document.querySelector(".nowWishlist h3");
    const nowIcon = document.querySelector(".nowCondition img");
    const detailCity = document.querySelector("section#details h2")
    const detailTemperature = document.querySelector(".temperature span");
    const detailFeelsLike = document.querySelector(".feelslike span");
    const detailWeather = document.querySelector(".weather span");
    const detailSunrise = document.querySelector(".sunrise span");
    const detailSunset = document.querySelector(".sunset span");
    const addToFavourites = document.querySelector(".love");

    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';
    wrapper.prepend(form);



    const locationList = document.createElement(`ul`);
    const locationHeading = document.querySelector(`.addedLocations`);
    locationHeading.after(locationList);


    let favoriteCities = [];

    if (localStorage.getItem("favoriteCities") === null) {
        localStorage.setItem('favoriteCities', JSON.stringify(favoriteCities));
    
    }
    const localStorageFavCities = localStorage.getItem('favoriteCities');
    const parsedFavourites = JSON.parse(localStorageFavCities);
  


    //после клика на инпут выводим во вкладку now город и сохраняем его во временном массиве tempCitiesArray
    function getCity(event) {
        event.preventDefault();
        const cityName = document.querySelector('.cityInput').value;
        const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(function (json) {
                if (json.cod === "404") {

                    alert(`${json.message}`);
                }
                else {
                    // console.table(json); 
                    let temperature = (json.main.temp).toFixed(0);
                    nowTemperature.textContent = temperature;
                    nowCity.textContent = json.name;
                    let getIcon = json.weather[0].icon;
                    nowIcon.src = `http://openweathermap.org/img/wn/${getIcon}@2x.png`;
                    nowIcon.alt = json.weather[0].description;

                    detailCity.textContent = json.name;
                    detailTemperature.textContent = temperature;
                    detailFeelsLike.textContent = json.main.feels_like;
                    detailWeather.textContent = json.weather[0].description;
                    detailSunrise.textContent = timeConverter(json.sys.sunrise);
                    detailSunset.textContent = timeConverter(json.sys.sunset);
                    favoriteCities = [];
                    favoriteCities.push({
                        name: `${json.name}`,
                        temperature: `${temperature}`,
                        icon: `${getIcon}`,
                        feelslike: `${json.main.feels_like}`,
                        weather: `${json.weather[0].description}`,
                        sunrise: `${timeConverter(json.sys.sunrise)}`,
                        sunset: `${timeConverter(json.sys.sunset)}`,
                    });

                    // console.table(favoriteCities);
                    form.querySelector("input.cityInput").value = '';

                  
                }
            })
            .catch(error => alert(error.message));
    }

    



    //добавляем город в избранное 
    
    function addCityToFavorites() {

        const locationItem = document.createElement(`li`);
        locationList.prepend(locationItem);
        const lastCityItem = favoriteCities[favoriteCities.length - 1];
        const lastCityItemName = lastCityItem.name;

        if(parsedFavourites.find(i => i.name === lastCityItemName)) {

            alert('город уже добавлен')
        }
        
        else{
            
            parsedFavourites.push(...favoriteCities);
            localStorage.setItem('favoriteCities', JSON.stringify(parsedFavourites));

            const deleteLocation = document.createElement(`a`);
            locationItem.textContent = lastCityItem.name;
            locationItem.setAttribute('class', `${lastCityItem.name}`);
            locationItem.after(deleteLocation);
            deleteLocation.textContent = "x";
            deleteLocation.setAttribute('class', `${lastCityItem.name}`);
            deleteLocation.setAttribute('href', '#');

        }

       

       // favoriteCities.push(...tempCitiesArray);

        
      // deleteCityFromFavorites();
       // getStoredCities();
       showCurrentCity();

       getCitiesToDelete();
       


    }
    


// выводим список избранных
   

    function loadFavoriteCities() {
        if(parsedFavourites){

            parsedFavourites.forEach(city => {

                const locationItem = document.createElement(`li`);
                locationList.prepend(locationItem);
                const lastCityItem = city;
                const deleteLocation = document.createElement(`a`);
                locationItem.textContent = lastCityItem.name;
                locationItem.setAttribute('class', `${lastCityItem.name}`);
                locationItem.after(deleteLocation);
                deleteLocation.textContent = "x";
                deleteLocation.setAttribute('class', `${lastCityItem.name}`);
                deleteLocation.setAttribute('href', '#');


            })
        }

    }


    function getCitiesToDelete(){
        const deleteCityList = document.querySelectorAll(`.citylist ul a`);
        console.log('getCitiesToDelete')
        console.table(deleteCityList)
        console.table(parsedFavourites)
        return deleteCityList;
        
    }
    
       // удаляем город из favoriteCities забиваем пока на локал
       function deleteCityFromFavorites() {
        const deleteCityList = getCitiesToDelete();
        console.log('deleteCityFromFavorites')
        console.table(deleteCityList)
       
        deleteCityList.forEach(city => {
            city.addEventListener('click', () => {
                let currentCity = city.className;
                alert(currentCity)

                console.log('parsedFavourites BEFORE')

                console.table(parsedFavourites)

                let position = parsedFavourites.findIndex(item => item.name == currentCity);
                parsedFavourites.splice(position, 1);

                console.log('parsedFavourites After')

                console.table(parsedFavourites)

                document.querySelector(`li.${currentCity}`).remove();
                document.querySelector(`a.${currentCity}`).remove();

                localStorage.removeItem('favoriteCities');
                localStorage.setItem('favoriteCities', JSON.stringify(parsedFavourites));

                getCitiesToDelete();


            })
        })


    }



    function showCurrentCity() {
     
        let storedCityList = document.querySelectorAll(`.citylist ul li`);
        storedCityList.forEach(city => {
            city.addEventListener('click', () => {
          
                let currentCity = city.textContent;

                let cityObj = parsedFavourites.filter((city) => city.name == currentCity);

             
                nowTemperature.textContent = cityObj[0].temperature;
                nowCity.textContent = cityObj[0].name;
                nowIcon.src = `http://openweathermap.org/img/wn/${cityObj[0].icon}@2x.png`;
                nowIcon.alt = cityObj[0].weather;
                detailCity.textContent = cityObj[0].name;
                detailTemperature.textContent = cityObj[0].temperature;
                detailFeelsLike.textContent = cityObj[0].feelslike;
                detailWeather.textContent = cityObj[0].weather;
                detailSunrise.textContent = cityObj[0].sunrise;
                detailSunset.textContent = cityObj[0].sunset;

            })
        })
    }

    form.addEventListener(`submit`, getCity);
    addToFavourites.addEventListener(`click`, addCityToFavorites);
    loadFavoriteCities();
    getCitiesToDelete();
    deleteCityFromFavorites();
    showCurrentCity();

});

