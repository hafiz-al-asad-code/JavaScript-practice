const shoppingList = [
    {name: 'mousePad', price: 200, quantity: 3},
    {name: 'laptopStand', price: 350, quantity: 2},
    {name: 'keyboard', price: 600, quantity: 1},
    {name:'charger', price: 420, quantity: 4},
]

function shoppingPrice(list){
  let total = 0;

  for(let item of list)
  {
    total = total + item.price * item.quantity;
  }
  return total;
}

const totalPrice = shoppingPrice(shoppingList);
console.log(totalPrice);
