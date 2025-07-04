function calculateTax(income, expenses) {

  if(income < 0 || expenses < 0 || income < expenses)
  {
    return "Invalid Input";
  }

  let difference = income - expenses;
  let tax = difference * (20/100);
  
  return tax;        
}

const tax = calculateTax(6000, -1500);
console.log(tax);