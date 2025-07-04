/*
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/

function getLowestNumber(heights){
  let lowest = heights[0];

  for(let item of heights)
  {
    if(lowest > item)
    {
      lowest = item;
    }
  }
  return lowest;
}

const heights2 = [167, 190, 120, 165, 137];
const lowestNumber = getLowestNumber(heights2);
console.log(lowestNumber);

