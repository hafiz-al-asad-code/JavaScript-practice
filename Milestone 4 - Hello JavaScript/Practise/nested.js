const shudha = {
  name: 'chowmohony college',
  class: ['11', '12', '13'],
  events: ['science fair', 'cultural event', 'bijoy dibosh'],
  unique: {
    color: 'white',
    merits: {
      result: 'gpa5',
      merit: 'top',
      A: ['1', '2', '4', '5'],
    }
  }
}

shudha.unique.merits.merit = 'low';
console.log(shudha.unique.merits.merit);
shudha.events[1] = '21 February';
console.log(shudha.events);
console.log(shudha['unique']['merits'].A[3]);

delete shudha.unique.merits.merit;
console.log(shudha);