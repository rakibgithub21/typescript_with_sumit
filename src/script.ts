

const applePrice = 10;

const a = 20;
const b = 45;
const c = 20;
const d = 45;



// explicitly type declaration
let playerName: string = "Mashrafi"; // use type
let age: number = 34;

function multiply(a: number, b: number):number {
    return a * b
}

multiply(4, 5)


let fruits: (number | string)[] = ['orange', 'apple', 'banana', 45, 64]

let x = [3, 'je', 4]


let person: {
    name: string,
    age: number,
    isCaptin:boolean,
} = {
    name: 'Mashrafi',
    age: 35,
    isCaptin:true,
}

person.name = 'sakib'


let abc: number;//explicitly declare type
abc = 45

let xyz: (number | string | boolean)[]=[]; // union type

xyz.push('hello')
xyz.push(5)
xyz.push(false)


let person1: {
    name: string,
    age: number,
    adult:boolean
} 

person1 = {
    name: 'Rakibul Islam',
    age: 35,
    adult:true
}

console.log(person1);







//  dynamic type or any type

let wow: any[] = [];//dynamic or any type
let ab: any;
let bx: any = {} // dynamic or any type 
bx.number = 5;
bx.gender = "male";
bx.adult = false;
console.log(bx);
