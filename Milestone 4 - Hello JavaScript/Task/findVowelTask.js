/*
Write a function to count the number of vowels in a string.
*/

function countVowels(string){
  let count = 0;

  for(let letter of string)
  {
    if(letter==='a' || letter==='e' || letter==='i' || letter==='o' || letter==='u' || letter==='A'|| letter==='E'|| letter==='I'|| letter==='O' || letter==='U')
    {
      count = count + 1;
    }
  }
  return count;
}

const string = 'Bangladesh is my country and I am its President. My name is Hafiz Al Asad Bhuiyan';
const howManyVowels = countVowels(string);
console.log(howManyVowels);