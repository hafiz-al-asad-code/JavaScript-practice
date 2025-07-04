const name = [1, 2, 3, 4, 5, 6, 7];

// name.reverse();
// console.log(name);

// const reverse = [];
// for(let num of name)
// {
//   reverse.unshift(num);
// }
// console.log(reverse);

// const reverseNumber = [];

// for(i=0; i<name.length; i++)
// {
//   const num = name[i];
//   reverseNumber.unshift(num);
// }
// console.log(reverseNumber);

// const reverseNumber = [];

// for(i=name.length-1; i>=0; i--)
// {
//  const num = name[i];
//  reverseNumber.push(num);
// }
// console.log(reverseNumber);

const string = 'Bangladesh is my country';

// const newString = string.split(' ').reverse().join(' ');
// console.log(newString);

// const reverseString = [];

// for(i=string.length-1; i>=0; i--)
// {
//  const letter = string[i];
//  reverseString.push(letter);
// }
// console.log(reverseString.join(''));

// const reverseString = [];

// for(let letter of string)
// {
//   reverseString.unshift(letter);
// }
// console.log(reverseString.join(''));

let reverse = '';

for(let letter of string)
{
  reverse = letter + reverse;  
}
console.log(reverse);
