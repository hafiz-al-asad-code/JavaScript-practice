//Convert inch to Feet
//12 inch = 1 feet

function inchToFeet(inch){
  const feet = inch/12;

  return feet;
}

const pabonHeight = inchToFeet(71);
console.log('Pabon Height = ', pabonHeight);

function inchToFeet2(inch){
  const feetFraction = inch/12;
  onlyFeet = parseInt(feetFraction);
  const inchRemaining = inch%12;
  const result = onlyFeet + ' feet ' + inchRemaining + ' inch ';
  return result;
}

const shudhaHeight = inchToFeet2(75);
console.log('Shudha Height = ', shudhaHeight);

//mile to Kilometer

function mileToKm(mile){
  const kilometer = mile * 1.60934;
  return kilometer2 = kilometer;
}

const kilo = mileToKm(55);
console.log('Kilometer = ', kilo, 'km');

//Kilometer to mile

function kiloToMile(kilo){
  const mile = kilo/1.60934;
  return mile;
}

const mile = kiloToMile(32);
console.log('Mile = ', mile);