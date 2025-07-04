/*
Count how many times a string has the letter a or A
*/

const pabon = 'My name is Hafiz Al Asad Bhuiyan. I am 23 years old. I am from Noakhali in Bangladesh.'
let count = 0;

for(let letter of pabon)
{
  if(letter=='a' || letter=='A')
  {
    count = count + 1;
  }
}
console.log('Number of a in the string : ', count);