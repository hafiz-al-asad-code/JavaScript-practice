/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/

function longestWord(string){
  const makeArray = string.split(' ');
  
  let maximum = '';

 for(let item of makeArray)
  {  
     if((maximum.length) < (item.length))
     {
      maximum = item;
     }
  }
  return maximum;
}

const string = 'I am learning Programming to become a programmer';
const result = longestWord(string);
console.log(result);