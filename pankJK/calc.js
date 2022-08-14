function calc(func, a, b) {
    switch (func) {
      case "add":
        return +a + +b;
      case "multi":
        return a * b;
      case "sub":
       console.log("sub")
        return a - b;
  
      default:
        return "error";
    }
  }
  console.log(calc("sub", 1, 2));