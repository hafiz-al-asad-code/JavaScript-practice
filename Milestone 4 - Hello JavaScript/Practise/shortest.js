function getMin(numbers){
  let minimumHeight = numbers[0];

  for(let item of numbers)
  {
    if(minimumHeight > item)
    {
      minimumHeight = item;
    }
  }
  return minimumHeight;
}

const heights = [10, 40, 12, 89, 67, 43, 78, 78, 90, 10, 20, 33, 10, 11, 9, 6, 70, 8, 8, -2, -4];
const minHeight = getMin(heights);
console.log(minHeight);