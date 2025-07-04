const laptop = 
{
  brand: 'HP',
  price: 53000,
  buyYear: 2025,
  display: 'FHD',
  'ram uses': 'Hafiz Al Asad Bhuiyan',
}
console.log(laptop.display);

let pabon = 
{
  FullName: 'Hafiz Al Asad Bhuiyan',
  Age: 23,
  Colour: 'Brown',
  Education: ['JSC', 'SSC', 'HSC'],
  PassingYear :
  {
    JSC: 2018,
    SSC: 2029,
    HSC: 2021,
  },
  Heigth:
  {
    heigth: '5 feet 9 inche',
    type: 'tall',
  }
}
// console.log(pabon);

// console.log(pabon.PassingYear.HSC);
// console.log(pabon.Heigth.heigth);
// let abir = laptop.price;
// console.log(abir);

// console.log(laptop['ram uses']);

// laptop['price']=43000;
// console.log(laptop);

let human = 'type';
pabon[human]='short';
console.log(pabon);