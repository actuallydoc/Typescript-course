"use strict";
let id = 5;
//Basic types
let company = "Google";
let isPublic = false;
let x = 'hello';
let age;
//Type of array that only contains numbers
let ids = [1, 2, 3];
//Will prevent cuz string is being pushed into int array
// ids.push('hello')
//Mixed types
let arr = [];
//Tuples    
//Can assign type to each variable in the tuple
//In particular order
let address = ['Main st', 123, true];
let employee;
//Array of tuples
employee = [
    [1, 'Max'],
    [2, 'Anna'],
    [3, 'Chris'],
];
//Unions
//Can be any of the types that u set below
let productID;
//Enums.  Constants
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT"; // 3
})(Direction || (Direction = {}));
console.log(Direction.DOWN);
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "UP";
    Direction2["DOWN"] = "DOWN";
    Direction2["LEFT"] = "LEFT";
    Direction2["RIGHT"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
//Will print "DOWN" string
console.log(Direction2.DOWN);
//Can assign values to an object
//User type look above
const user = {
    id: 1,
    name: 'John'
};
//Type assertion
let cid = 1;
//Change cid to number type with <>
//let customerId = <number>cid;
let customerId = cid;
//Functions
//X: type of number, Y: type of number and the return is :number at the end
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
//Void for no return type
function log(message) {
    console.log(message);
}
log('Hello');
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
//Interace with a function
const add = (x, y) => {
    return x + y;
};
const sub = (x, y) => {
    return x - y;
};
//Classes
class Person {
    //It runs when you make a new person its like a init funcion in python
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log('Creating person object');
    }
    register() {
        //Returns a string look PersonInterface
        return `${this.name} is registered`;
    }
}
//New person object
const maj = new Person(1, "Maj");
const Doc = new Person(1, "Doc");
console.log(maj.register());
//Cant change the value
// maj.id = 5;
//Subclass
class Employee extends Person {
    constructor(id, name, position) {
        //Call the parent constructor
        super(id, name);
        //This has to be defined since its not in the parent constructor
        this.position = position;
    }
}
const emp = new Employee(1, "Maj", "Developer");
console.log(emp.name);
console.log(emp.register());
console.log(emp.position);
