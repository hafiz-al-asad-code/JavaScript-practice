function fullName (first, second){
  if(typeof first !== 'string' || typeof second !== 'string')
  {
    return 'Please provide string';
  }
  let name = first + ' ' + second;
  return name;
}

const yourName = fullName('Hafiz', 'Al Asad Bhuiyan');
console.log(yourName);

function getPrice(laptop){
  if(typeof laptop !== 'object')
  {
    return 'Please provide an object';
  }
  const price = laptop.price;
  return price;
}

const laptopDetails = {name: 'laptop', price: 53000, color: 'white'};

const price = getPrice(laptopDetails);
console.log(price);

function second(numbers){
  if(Array.isArray(numbers)===false)
  {
    return 'Please provide an array';
  }

  let sec = numbers[1];
  return sec;
}

const A = [12, 30, 5, 4, 23, 43, 98, 90];
const getSecond = second(A);
console.log(getSecond);
