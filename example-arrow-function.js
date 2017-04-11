'use strict';

let names = ['Arm', 'Sand', 'Andy'];

names.forEach(function(name) {
  console.log(`forEach: ${name}`);
});

// Arrow function instead of anonymous function
names.forEach((name) => {
  console.log(`arrowFunction: ${name}`);
});

// short form
names.forEach((name) => console.log(name));

let returnMe = (name) => name + '!';
console.log(returnMe('Arm'))

// Arrow function use this as a parent context
let person = {
  name: 'Arm',
  greet: function() {
    names.forEach(function(name) {
      console.log(this.name + ' say hi to ' + name);
    })
  },
  arrowGreet: function() {
    names.forEach((name) => {
      console.log(this.name + ' say hi to ' + name);
    })
  },
}

// person.greet(); generate error on this
person.arrowGreet();
