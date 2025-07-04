/*
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
*/

function make_avg(array, sizeOfArray){
  let sum = 0;

  for(let index of array)
  {
    sum = sum + index;
  }
  let average = sum/sizeOfArray;

  return average;
}

let numbers = [10, 20, 30, 40, 44, 33, 89, 100];
let size = numbers.length;
let average = make_avg(numbers, size);

console.log(average);