/*
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
*/

const statement = 'I am a hard working person'
let reverseWord = [];

let statement2 = statement.split(' ');

for(let i=0; i<statement2.length; i++)
{
  reverseWord.unshift(statement2[i]);
}

console.log(reverseWord.join(' '));