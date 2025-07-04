function checkDigitsInName(name) {
  
  if(typeof name !== 'string')
  {
    return 'Invalid Input';
  }

  for(let letter of name)
  {
    if(letter >= '0' && letter <= '9')
    {
      return true;
    }
  }
  return false;
}

const passportName = checkDigitsInName(["Raj"]);
console.log(passportName);