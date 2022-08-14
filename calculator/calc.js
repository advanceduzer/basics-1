function calc(komanda, a, b) {
    switch (komanda) {
      case "add":
        console.log(a + b);
        break;
  
      case "multi":
        console.log(a - b);
        break;
      case "subtract":
        console.log(a * b);
        break;
    }
  }
  console.log(calc("add", 5, 2));
  console.log(calc("multi", 10, 5));
  console.log(calc("subtract", 6, 3));
  