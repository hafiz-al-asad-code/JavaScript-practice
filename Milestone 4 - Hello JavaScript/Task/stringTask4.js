/*
If a given string has either x, replace x by y. if the given string has X, replace it by Y.
*/

const string = "fox is an animal. It does not go to university. Fox foX fox. Boy boY boY. XXX, xxx."

console.log(string.includes('x'));
console.log(string.includes('X'));

let newString = string.replace(/x/g, 'y');
newString = newString.replace(/X/g, 'Y');

console.log(newString);