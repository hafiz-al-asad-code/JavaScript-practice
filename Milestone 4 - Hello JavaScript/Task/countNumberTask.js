/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2


sample-input:

numbers = [5,6,11,12,98, 5]

find: 25

output: 0
*/

function countNumber(numberArray, find){
  let countRepeat = 0;

  for(let numbers of numberArray)
  {
  if(numbers===find)
    {
    countRepeat = countRepeat + 1;
    }
  }
  return countRepeat;
}

const numbers = [5,6,11,12,98, 5];
const findNumber = 5;

const countNum = countNumber(numbers, findNumber);

console.log(countNum);
