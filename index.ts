let id: number = 5;
//Basic types
let company: string = "Google";
let isPublic: boolean = false;
let x: any = 'hello'
let age: number

//Type of array that only contains numbers
let ids: number[] = [1, 2, 3]
//Will prevent cuz string is being pushed into int array
// ids.push('hello')
//Mixed types
let arr: any[] = [];


//Tuples    
//Can assign type to each variable in the tuple
//In particular order
let address: [string, number, boolean] = ['Main st', 123, true]


let employee: [number, string][]


//Array of tuples
employee = [
    [1, 'Max'],
    [2, 'Anna'],
    [3, 'Chris'],
]

//Unions
//Can be any of the types that u set below
let productID: string | number



//Enums.  Constants
enum Direction {
    UP, //0  you can reasign with UP = 1 and it will print 1 instead of 0
    DOWN, //1
    LEFT, //2
    RIGHT // 3
}
console.log(Direction.DOWN)

enum Direction2 {
    UP = 'UP',
    DOWN = 'DOWN',
    LEFT = 'LEFT',
    RIGHT = 'RIGHT'
}

//Will print "DOWN" string
console.log(Direction2.DOWN)

type User = {
    id: number,
    name: string,
}

//Can assign values to an object

//User type look above
const user: User = {
    id: 1,
    name: 'John'
}

//Type assertion
let cid: any = 1;
//Change cid to number type with <>
//let customerId = <number>cid;
let customerId = cid as number;

//Functions
//X: type of number, Y: type of number and the return is :number at the end
function addNum(x: number, y: number):number {
    return x + y
}

console.log(addNum(1, 2));

//Void for no return type
function log(message: string | number): void{
    console.log(message);
    
}

log('Hello');

//Interfaces similar to types
interface UserInterface {
    //Read only like constants
    readonly id: number,
    name: string,
    //? Optional property
    age?: number,
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}

//type can be used with primitive and unions
type Point = number | string
const p1: Point = 1
 
interface MathFunc {
    (x: number, y: number): number
}
//Interace with a function
const add: MathFunc = (x: number, y: number): number =>{
    return x + y
}
const sub: MathFunc = (x: number, y: number): number =>{
    return x - y
}

////////////////

interface PersonInterface {
    id: number,
    name: string,
    register(): string,
}


//Classes
class Person implements PersonInterface {
    //Public by default you can make them private so you cant change the values of the object you created for example
    id: number
    name: string
    //It runs when you make a new person its like a init funcion in python
    constructor(id: number, name: string){
        this.id = id
        this.name = name
        console.log('Creating person object');
        
    }

    register(){
        //Returns a string look PersonInterface
        return `${this.name} is registered`
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
    position: string

    constructor(id: number, name: string, position: string){
        //Call the parent constructor
        super(id, name)
        //This has to be defined since its not in the parent constructor
        this.position = position
    }
    }

    const emp = new Employee(1, "Maj", "Developer");

    console.log(emp.name);
    console.log(emp.register());
    console.log(emp.position);

////Generics <T> 
//This is smart lmao wtf
function getArray<T>(items: T[]): T[]{
    //Make an array and concat the items on the new array
    return new Array().concat(items);
}
//You set the type of the array with <TYPE> and the function returns an array of that type
let numArray = getArray<number>([1,2,3,4,5,6,7,8])
let strArray = getArray<string>(['a', 'b', 'c', 'd', 'e'])
    
