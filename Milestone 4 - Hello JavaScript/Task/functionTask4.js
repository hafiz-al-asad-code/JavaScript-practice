/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

function count_zero(number){

  let count = 0;

  for(let letter of number)
  {
    if(letter==false)
    {
      count = count + 1;
    }
  }
  return count;
}

const binaryString = '10101010000011111001001000010000101111010';
let count = count_zero(binaryString);

console.log(count);
