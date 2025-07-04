/*
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/

/*
Solution by for of loop:

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseLetter = [];

for(let letter of colors)
{
  reverseLetter.unshift(letter);
}
console.log(reverseLetter);
*/

/*
Solution by for loop(incremental):

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseLetter = [];

for(i=0; i<colors.length; i++)
{
  let letter = colors[i];
  reverseLetter.unshift(letter);
}
console.log(reverseLetter);
*/

/*
Solution by for loop(decremental):

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseLetter = [];

for(i=colors.length-1; i>=0; i--)
{
  let letter = colors[i];
  reverseLetter.push(letter);
}
console.log(reverseLetter);
*/

/*
Solution by while loop:

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let reverseLetter = [];
let i=0;

while(i<colors.length)
{
  let letter = colors[i];
  reverseLetter.unshift(letter);
  i++;
}
console.log(reverseLetter);
*/