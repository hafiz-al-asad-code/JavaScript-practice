/*
Check whether a string contains all the vowels a, e, i, o, u
*/

const A = 'Hello Edcation, how are you';

//Solution by for loop:

// for(let letter of A)
// {
//   if(letter=='a' || letter=='e' || letter=='i' || letter=='o' || letter=='u')
//   {
//       console.log(letter);
//   }
// }

//Solution by includes function:

console.log(A.includes('a'));
console.log(A.includes('e'));
console.log(A.includes('i'));
console.log(A.includes('o'));
console.log(A.includes('u'));