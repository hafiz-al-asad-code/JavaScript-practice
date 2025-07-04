let Shudha = 100000;
let Pabon = 500;
let temp;

temp = Shudha;
Shudha = Pabon;
Pabon = temp;

console.log('Shudha = ', Shudha, 'Pabon = ', Pabon);


let x = 3;
let y = 2;

[y, x] = [x, y];
console.log(x, y);