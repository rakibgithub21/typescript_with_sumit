"use strict";
const applePrice = 10; // here is not explicitly define type but type script is too smart , type script can define it implicitly and its call inference
const a = 20; //inference
const b = []; //inference
const c = 'love'; //inference
const d = {}; //inference
// explicitly type declaration || here we can declare type  with  Type Annotations
let playerName = "Mashrafi"; // use type
let age = 34;
function multiply(a, b) {
    return a * b;
}
multiply(4, 5);
let fruits = ['orange', 'apple', 'banana', 45, 64];
let x = [3, 'je', 4];
let person = {
    name: 'Mashrafi',
    age: 35,
    isCaptin: true,
};
person.name = 'sakib';
let abc; //explicitly declare type
abc = 45;
let xyz = []; // union type
xyz.push('hello');
xyz.push(5);
xyz.push(false);
let person1;
person1 = {
    name: 'Rakibul Islam',
    age: 35,
    adult: true
};
console.log(person1);
//  dynamic type or any type
let wow = []; //dynamic or any type
let ab;
let bx = {}; // dynamic or any type 
bx.number = 5;
bx.gender = "male";
bx.adult = false;
console.log(bx);
// how to use function
const myFunc = () => {
    console.log('hello ! ');
};
myFunc();
const myFunc1 = () => {
    return 5 * 4;
};
console.log(myFunc1());
function abcd() {
    return 5 * 5;
}
let func;
func = () => {
    return "hello world";
};
// function parameter
const multiplyTwoNumber = (a, b, c, d = 'Riye') => {
    console.log(b + ' ' + d);
    return a * 5;
};
multiplyTwoNumber(4, 'hello my dear');
const admin = {
    name: 'Rakib',
    role: 'admin',
    gender: 'male',
    age: 23
};
const member = {
    name: 'Islam',
    role: 'member',
    gender: 'male',
    age: 24
};
//Function signatures
let add; // here it is a function signatures bellow is main function based on above signatures.
add = (a, b) => {
    return a * b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === 'minus') {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(4, 5, 'add'));
//generics:
const addId = (obj) => {
    console.log(obj, 'generic');
    let id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addId({
    name: "Mashrafi",
    age: 40,
    country: 'Bangladesh',
    PM: 'Seikh Hasina'
});
// let plaer = 'Sakib al hasan'
// addId(plaer)
