/*
You are given an array of phone objects, each containing information about the model, brand, and price. 
Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

Input

    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];
*/

function findAveragePhonePrice(phonesArray){
  const lengthOfArray = phonesArray.length;
  let phonePrice = 0;

  for(let phone of phonesArray)
  {
      phonePrice = phonePrice + phone.price;
  }
  let averagePrice = phonePrice/lengthOfArray;
  return Number(averagePrice.toFixed(2));
}

const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

const average = findAveragePhonePrice(phones);
console.log(average);