/*
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/

function evenOrOdd(number){
  
  if(number%2==0)
  {
    console.log('even number');
    let result = number/2;

    return result;
  }
  else{
    console.log('odd number');
    let result = number*2;

    return result;
  }
}

let result = evenOrOdd(21);
console.log(result);