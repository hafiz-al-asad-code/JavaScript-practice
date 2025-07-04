function  waitingTime(waitingTimes  , serialNumber) {
  if(Array.isArray(waitingTimes)===false)
  {
    return 'Invalid Input';
  }
  else if(typeof serialNumber !== 'number')
  {
    return 'Invalid Input';
  }

  let timeOfVivaDone = 0;
  let numberOfVivaDone = waitingTimes.length;

  for(let item of waitingTimes)
  {
    timeOfVivaDone = timeOfVivaDone + item;
  }
  let averageTime = Math.round(timeOfVivaDone/numberOfVivaDone);

  let remainPersonFromIsrat = serialNumber-1;
  let vivaPersonRemain = remainPersonFromIsrat - numberOfVivaDone;

  let waitingTimeOfIsrat= vivaPersonRemain * averageTime;

  return waitingTimeOfIsrat; 
}

const time = waitingTime([7, 8, 3, 4, 5, 7], 15);
console.log(time);