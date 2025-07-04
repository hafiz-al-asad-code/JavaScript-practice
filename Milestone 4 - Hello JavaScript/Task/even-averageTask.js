/*
Calculate the average of the even numbers in an array.
*/

function avgOfEven(number){
  let sum = 0;
  const even = [];

  for(let numbers of number)
  {
    if(numbers%2===0)
    {
      even.push(numbers);
      sum = sum + numbers;
    }
  }
  const length = even.length;

  if(length===0)
  {
    return 'There is no even number in the array';
  }

  const average = sum/length;

  return average;
}

const evenNumbers = [11, 13, 15, 33, 67, 2, 4, 100, 46, 88, 29];
const result = avgOfEven(evenNumbers);

console.log(result);