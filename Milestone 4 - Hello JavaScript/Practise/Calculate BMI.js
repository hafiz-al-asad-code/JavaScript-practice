let BMI, weight=70, height=1.54;
BMI = weight/(height*height);

if(BMI<18.5)
{
  console.log("You are underweight");
}
else if(BMI>=18.5 && BMI<=24.9)
{
   console.log("You are normal"); 
}
else if(BMI>=25 && BMI<=29.9)
{
  console.log("You are overweight");
}
else
{
  console.log("You are obese");
}