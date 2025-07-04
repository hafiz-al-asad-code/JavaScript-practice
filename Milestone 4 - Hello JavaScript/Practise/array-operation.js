//Sum of numbers of an array by function

function arraySum(jog){
  
  let sum = 0;

  for(let array of jog)
  {
    sum = array + sum;
  }
  return sum;
}

let jog = [1, 2, 4, 6, 88, 79, 70];
let addition = arraySum(jog);
console.log('The sum is = ', addition);

//Finds out even number from an array

function arrayEven(pabon){
  
  let evenNumber = [];
  
  for(let array of pabon)
  {
    if(array%2==0)
    {
      evenNumber.push(array);
    }
  }
  return evenNumber;
}

let pabon = [1, 2, 4, 6, 88, 79, 70, 100];
let result = arrayEven(pabon);

console.log('Even numbers are = ', result);

//Sum of even numbers of an array

function sumOfEven(numbers){
  let sum = 0;
  
  for(let array of numbers)
  {
    if(array%2==0)
    {
      sum = array + sum;
    }
  }
  return sum;
}

let A = [10, 20, 30, 40, 50];
let evens = sumOfEven(A);

console.log('The sum of even numbers are = ', evens);