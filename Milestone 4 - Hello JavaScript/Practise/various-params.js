function evenSizeString(string){
  const stringNew = string.length;
  
  if(stringNew%2==0)
  {
    console.log(stringNew, 'even sized');
  }
  else{
    console.log(stringNew, 'odd sized');
  }
}

evenSizeString('Hafiz Al Asad Bhuiyan');

function doubleOrTriple(number, doDouble){
  if(doDouble==true)
  {
    const result = number * 2;
    return result;
  }
  else{
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(6, true));
console.log(doubleOrTriple(6, false));


function numberOfElements(numbers){
  const elements = numbers.length;
  return elements;
}

console.log(numberOfElements([1, 22, 33, 44, 66, 5, 90]));


let pabon = {
  'full name': 'Hafiz Al Asad',
  age: 369,
  color: 'brown'
};

function getAge(faisal){
  const age = faisal.age;
  return age;
}

console.log(getAge(pabon));