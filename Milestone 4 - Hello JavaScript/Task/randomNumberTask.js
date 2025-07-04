/*
Generate a random number between 10 to 20.
*/

//Solution by one method:

let i = 1;
while(i<=1000)
{
let number = Math.floor(Math.random()*100);

  if(number>=10 && number<=20)
  {
    console.log(number); 
    break;
  }
  i++;
}

//Solution by another method:

while(true)
{
let number = Math.floor(Math.random()*100);

  if(number>=10 && number<=20)
  {
    console.log(number);
    break;
  }
}

//Solution by another method:(The most efficient method)

const number = Math.floor(((Math.random()*11) + 10));
console.log(number);