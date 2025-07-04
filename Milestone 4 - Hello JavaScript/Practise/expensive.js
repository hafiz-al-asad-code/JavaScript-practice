const phones = [
  {name: 'samsung', price: 400000, camera: '32mp', color: 'black'},
  {name: 'xiaomi', price: 21000, camera: '32mp', color: 'black'},
  {name: 'onePlus', price: 34000000, camera: '32mp', color: 'black'},
  {name: 'redmi', price: 50000, camera: '32mp', color: 'black'},
]

function getExpensivePhone(phones){
  let expensive = phones[0]

  for(let item of phones)
  {
    if(expensive.price < item.price)
    {
      expensive = item;
    }
  }
  return expensive;
}

const expensivePhone = getExpensivePhone(phones);
console.log(expensivePhone);

