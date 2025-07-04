/*
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function getSmallestName(names){
  let smallestName = names[0];

  for(let name of names)
  {
    if((smallestName.length) > (name.length))
    {
      smallestName = name;
    }
  }
  return smallestName;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallName = getSmallestName(heights2);
console.log(smallName);