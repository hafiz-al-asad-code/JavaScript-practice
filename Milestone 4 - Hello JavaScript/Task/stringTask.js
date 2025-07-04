/*
Count how many times a string has the letter a
*/

const pabon = 'My name is Hafiz Al Asad Bhuiyan. I am 23 years old. I am from Noakhali in Bangladesh.'
let count = 0;

//Solution by for of loop:

// for(let letter of pabon)
// {
//   if(letter=='a')
//   {
//     count = count + 1;
//   }
// }
// console.log(count);

//Solution by for loop:

// for(i=0; i<pabon.length; i++)
// {
//   if(pabon[i]=='a')
//   {
//     count = count + 1;
//   }
// }
// console.log('Number of a in the string: ', count);

//Solution by while loop: 

let i=0;
while(i<pabon.length)
{
  if(pabon[i]=='a')
  {
    count = count + 1;
  }
  i++;
}
console.log('Number of a in the string: ', count);
