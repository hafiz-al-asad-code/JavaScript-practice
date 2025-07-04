// const array = ['akib', 'nalib', 'sakib', 'bibek', 'anis', 'abdul', 'jahadul', 'Babul'];

// const stringAsc = string.sort();
// console.log(stringAsc);

// const numbers = [10, 3, 33, 2, 3, 5, 7, 100];

// const numbersAsc = numbers.sort();
// console.log(numbersAsc); //both array and numbers is not working properly

const pabon = [1, 33, 2, 4, 55, 66, 7, 8, 9, 100];

const pabonAsc = [...pabon].sort(function(a, b) {return a - b});
const pabonDsc = [...pabon].sort(function(a, b) {return b - a});

console.log(pabonAsc);
console.log(pabonDsc);