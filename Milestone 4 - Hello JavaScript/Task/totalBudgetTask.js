/*
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
  let laptopPrice = 35000;
  let tabletPrice = 15000;
  let mobilePrice = 20000;

  let laptopTotalPrice = laptopQuantity * laptopPrice;
  let tabletTotalPrice = tabletQuantity * tabletPrice;
  let mobileTotalPrice = mobileQuantity * mobilePrice;

  let totalMoneyRequired = laptopTotalPrice + tabletTotalPrice + mobileTotalPrice;
  return totalMoneyRequired; 
}

const totalBudget = calculateElectronicsBudget(5, 7, 8);
console.log(totalBudget);