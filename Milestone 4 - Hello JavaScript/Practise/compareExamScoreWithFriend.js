let yourScore = 89, friendScore = 39;

if(yourScore>80)
{
  if(friendScore>80)
  {
    console.log("Go for lunch");
  }
  else if(friendScore<80 && friendScore>=60)
  {
    console.log("Good luck next time");
  }
  else if(friendScore<60 && friendScore>=40)
  {
    console.log("You won't see your friend message");
  }
  else if(friendScore<40)
  {
    console.log("You will block your friend");
  }
}

else if(yourScore<40)
{
  console.log("You will go home and sleep and act sad");
}
