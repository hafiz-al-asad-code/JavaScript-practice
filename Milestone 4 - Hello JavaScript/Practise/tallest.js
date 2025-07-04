function getMax(numbers){
  let maximumHeight = numbers[0];

  for(let item of numbers)
  {
    if(maximumHeight < item)
    {
      maximumHeight = item;
    }
  }
  return maximumHeight;
}

const heights = [10, 40, 12, 89, 67, 43, 78, 78, 90, 10, 20, 33, 0, 11, 9, 6, 0, 8, 8];
const maxHeight = getMax(heights);
console.log(maxHeight);