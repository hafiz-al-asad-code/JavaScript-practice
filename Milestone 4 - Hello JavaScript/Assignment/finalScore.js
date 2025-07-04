function calculateFinalScore(obj) {
  let familyScore;

  if(obj.isFFamily===true)
  {
     familyScore = 20;
  }
  else{
     familyScore = 0;
  }

  let score = obj.testScore + obj.schoolGrade + familyScore;

  if(score>=80)
  {
    return true;
  }
  else{
    return false;
  }
}

const rajib = {
  name: 'Rajib',
  testScore: 36,
  schoolGrade: 24,
  isFFamily: false,
};

const finalScore = calculateFinalScore(rajib);
console.log(finalScore);