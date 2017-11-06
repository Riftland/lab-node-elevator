const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();

setInterval(() =>{
  elevator.call(new Person());
}, 5000);

//Sometimes the elevator breaks
