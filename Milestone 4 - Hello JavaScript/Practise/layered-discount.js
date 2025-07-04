function layeredDiscountedTotal(quantity){
  
  let first100Price = 100;
  let second100Price = 90;
  let above200Price = 70;

  if(quantity<=100)
  {
    let total = quantity * first100Price;
    return total; 
  }
  else if(quantity<=200)
  {
    let first100Total = 100 * first100Price;
    let remainingQuantity = quantity-100;
    let remainingTotal = remainingQuantity * 90;
    let total = first100Total + remainingTotal;
    return total;
  }
  else{
    let first100Total = 100 * first100Price;
    let second100Total = 100 * second100Price;
    let remainingQuantity = quantity - 200;
    let remainingTotal = above200Price * remainingQuantity;
    let total = first100Total + second100Total + remainingTotal;
    return total;
  }
}

const total = layeredDiscountedTotal(300);
console.log(total);