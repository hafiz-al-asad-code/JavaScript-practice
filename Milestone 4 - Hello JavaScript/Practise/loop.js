const mobile = {
  name: 'redmi 12c',
  brand: 'redmi',
  price: 15000,
  color: 'black',
}

// for(let keys in mobile)
// {
//   console.log(keys);
//   console.log(mobile[keys]);
// }

const pabon = Object.keys(mobile);
console.log(pabon);

for(const key of pabon)
{
  console.log(key, ':', mobile[key]);

}