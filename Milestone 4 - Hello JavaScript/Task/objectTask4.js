/*
Count the number of properties.

Input:

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
*/

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
}

let numberOfProperty = 0;
for(let property in student)
{
  console.log(property);
numberOfProperty = numberOfProperty + 1;
}
 console.log('Number Of Properties = ', numberOfProperty);