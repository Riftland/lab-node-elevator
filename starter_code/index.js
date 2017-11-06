const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
elevator.start();
let person1 = new Person("Fran", 3, 9);
elevator.call(person1);
let person2 = new Person("Manuel", 0, 5);
let person3 = new Person("María", 1, 7);
let person4 = new Person("Alberto", 9, 3);
