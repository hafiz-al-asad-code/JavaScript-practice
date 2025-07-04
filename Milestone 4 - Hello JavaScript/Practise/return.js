// function doubleIt(number){
//   let double = number * number;
//   return double;
// }

// let result = doubleIt(9);
// console.log(result);

// function addition(num1, num2, num3){
//   let sum = num1+ num2 + num3;
//   return sum;
// }

// let number1 = 3, number2 = 5, number3 = 8;
// let add = addition(number1, number2, number3);

// console.log('The sum is = ', add);

// function multipication(pabon1, pabon2, pabon3){
//   return pabon1 * pabon2 * pabon3;
// }

// const mul = multipication(3, 5, 6);
// console.log(mul);

function doMath(num1, num2){
  const sum = num1 + num2;
  const diff = num1 - num2;
  const multipication = sum * diff;
  const divide = multipication/2;

  return divide;
}

const result = doMath(4, 8);
console.log(result);


