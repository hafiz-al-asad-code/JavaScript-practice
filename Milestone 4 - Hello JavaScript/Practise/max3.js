function maxThree(number1, number2, number3){
  if(number1>number2 && number1>number3)
  {
    return number1;
  }
  else if(number2>number1 && number2>number3)
  {
    return number2;
  }
  else{
    return number3;
  }
}

const getNumber = maxThree(34, 56, 226);
console.log(getNumber);



const max = Math.max(34, 55, 66, 77, 33, 88, 0);
console.log(max); 

const min = Math.min(34, 55, 66, 77, 33, 88, 10);
console.log(min); 