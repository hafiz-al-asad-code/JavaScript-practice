/*
Shirt price--> 500
Pant price--> 300
Shoe price--> 900
*/

function shoppingList(shirtQuantity, pantQuantity, shoeQuantity){
 let perShirtCost = 500;
 let perPantCost = 300;
 let perShoeCost = 900;

 let shirtTotalCost = shirtQuantity * perShirtCost;
 let pantTotalCost = pantQuantity * perPantCost;
 let shoeTotalCost = shoeQuantity * perShoeCost;

 totalCost = shirtTotalCost + pantTotalCost + shoeTotalCost;

 return totalCost;
}

const price = shoppingList(2, 3, 5);
console.log(price + ' taka');