const pabon = {
    'full name': 'Hafiz Al Asad Bhuiyan',
    age: 23,
    'date of birth': '25 November 2003',
    education: ['JSC', 'SSC', 'HSC', 'Marine Engineering'],
    gotLaptop: {
      name: 'HP',
      price: 53000,
      ram: 'DDR5',
      type: function(){
        console.log('This is a new laptop');
      },
      apps: {app1: 'Microsoft office', app2: 'VS Code', app3: 'Pot Player'},
      array: [1, 2, 3, 4, 5, 6],
    },
    color: [{color1: 'black', color2: 'brown'}, {color3: 'white', color4: 'blue'}],
}

pabon.gotLaptop.type();
console.log(pabon['full name']);