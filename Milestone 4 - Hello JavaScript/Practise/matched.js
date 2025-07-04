const products = [
  {id:1, name: 'Samsung phone S21 ultra', price: 360000},
  {id:2, name: 'iphone', price: 25000},
  {id:3, name: 'hp laptop', price: 53000},
  {id:4, name: 'dell hightech Laptop', price: 78000},
  {id:5, name: 'Nokia old Phone', price: 65000},
  {id:6, name: 'Realme low tech Phone', price: 45000},
  {id:7, name: 'apple watch', price: 89000},
];

function searchProducts(productsArray, search){
  let matched = [];

  for(let item of productsArray)
  {
    if(item.name.toLowerCase().includes(search.toLowerCase()))
    {
      matched.push(item);
    }
  }
  return matched;
};

const result = searchProducts(products, 'Phone');
console.log(result);