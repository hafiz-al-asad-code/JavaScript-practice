// let pabon=['p', 'a', 'b', 'o', 'n'];

// let result = pabon.join("+");
// console.log(pabon.join("+"));
// console.log(Array.isArray(pabon));
// let num1=["Hafiz"];
// let num2 = ["Al Asad Bhuiyan"];
// let result = num1.concat(num2);
// console.log(result);
// let array = [1, 3, 44, 99, 90, 88, 30, 11, 33, 34, 66];
// let result = array.slice(1,6);
// console.log(result);

// const numbers = [12, 34, 56, 884, 84, 00, 100, 90];

// for(const num of numbers)
// {
//   console.log(num);
// }

// let pabon = ['hafiz', 'al', 'asad', 'bhuiyan'];
// for(const num of pabon)
// {
//   console.log(num);
//   console.log("Part of my name");
// }

// let num = 1;

// while(num<=60)
// {
//   console.log("You will invest atleast 6 hrs every day for the next 60 days");
//   num++;
// }

// let num1=1;

// while(num1<=10)
// {
//   console.log('num = ', num1);
//   num1++;
// }

// let num = 61;

// while(num<=100)
// {
//   if(num%2==1)
//   {
//     console.log("The number is odd", num);
//   }
//   num++;
// }

// let num = 78;
// while(num<=98)
// {
//   if(num%2==0)
//   {
//   console.log("The number is even", num);
//   }
//   num++;
// }

// let num;

// for(num=78; num<=98; num++)
// {
//   if(num%2==0)
//   {
//     console.log(num, "The number is even");
//   }
// }

// let num = 78;

// do
// {
//   if(num%2==0)
//   {
//   console.log(num, "The number is even");
//   }
//   num++;
// }
// while(num<=99);

// let num, sum=0;

// for(num=1; num<=10; num++)
// {
//   if(num%2==1)
//   {
//     sum = sum + num;
//   }
// }
// console.log('Sum is = ', sum);

// let num = 1, sum=0;

// while(num<=10)
// {
//   if(num%2==1)
//   {
//     sum = sum + num;
//   }
//   num++;
// }
// console.log('Sum = ', sum);

// let num = 5;

// for(let i=1; i<=10; i++)
// {
//   let result = num * i;
//   console.log(`${num} * ${i} = `, result);
// }

// let num = 8;
// let i=1;

// while(i<=10)
// {
//   result = num * i;
//   console.log(`${num} * ${i} = `, result);
//   i++;
// }

// let i;

// for(i=1; i<=11; i++)
// {
//   if(i>10)
//   {
//     break;
//   }
//   console.log(i);
// }
      
// let time = 21;

// while(time>=15)
// {
//   console.log(`Time = `, time);
//   time--;
  
// }

// let num=0;
// while(num<=45)
// {
//   num++;
//   if(num%2==0)
//   {
//     break;
//   }
//   console.log(num);
// }

// let num;

// for(num=1; num<=200; num++)
// {
//   console.log(num);
//   if(num==100)
//   {
//     break;
//   }
// }

// let num=1;
// while(num<=200)
// {
//   console.log(num);
  
//   if(num==100)
//   {
//     break;
//   }
//   num++;
// }

// let num=1, sum=0;

// while(num<=100)
// {
//   sum = sum+num;
//   console.log('Sum = ',sum);
//   if(sum>=100)
//   {
//     break;
//   }
//   num++;
// }

// let num;

// for(num=1; num<=100; num++)
// {
//   let result = num*num;
//   console.log(num);
  
//   if(result==num)
//   {
//     break;
//   }
// }

let num;

for(num=55; num<=85; num++)
{
  if(num%2==1)
  {
    if(num%5==0)
    {
      continue;
    }
    console.log(num);
  }
}