// console.log('Hello type script')

const applePrice = 10;
// console.log(applePrice + 20);

const a = 20;
const b = 45;
const c = 20;
const d = 45;
// console.log(a + b)
// 
//  type script basics lesson-3


let playerName: string = "Mashrafi"; // use type
let age: number = 34;


playerName = 'sakib'
console.log(playerName);


function multiply(a: number, b: number):number {
    return a * b
}

multiply(4, 5)


let fruits: (number | string)[] = ['orange', 'apple', 'banana', 45, 64]
console.log(fruits);

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