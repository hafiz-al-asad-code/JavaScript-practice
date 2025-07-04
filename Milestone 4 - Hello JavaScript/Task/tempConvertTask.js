/*
Write a function to convert temperature from Celsius to Fahrenheit.
*/

function celsiusToFahrenheit(celsius){
   const fahrenheit = (celsius * 9/5) + 32;

   return fahrenheit;
}

const celsiusTemp = celsiusToFahrenheit(36.34);
console.log(celsiusTemp + ' F');