function printSomething(value) {
    printThis = value || "not found";
    console.log("printThis is " + printThis);
  }
  printSomething("suryansh");
  console.log("--------------------------------");
  function printSomething(value) {
    printThis = value ?? "not found";
    console.log("printThis is " + printThis);
  }
  printSomething();