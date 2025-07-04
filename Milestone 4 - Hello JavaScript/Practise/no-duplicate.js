function noDuplicate(array){
  const unique = [];

  for(let item of array)
  {
    if(unique.includes(item)===false)
    {
      unique.push(item);
    }
  }
  return unique;
}

machKhabo = ['abul', 'babul', 'kabul', 'cabul', 'bulbul', 'babul', 'abul', 'iqbal', 'khairul', 'cabul'];
const uniqueArray = noDuplicate(machKhabo);
console.log(uniqueArray);

const number = [3, 51, 3, 5, 3, 5, 66, 89, 10, 40, 33, 66, 19, 10, 20, 20];
const uniqueArray2 = noDuplicate(number);
console.log(uniqueArray2);