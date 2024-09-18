

const applePrice = 10;// here is not explicitly define type but type script is too smart , type script can define it implicitly and its call inference

const a = 20; //inference
const b = [];//inference
const c = 'love';//inference
const d = {};//inference



// explicitly type declaration || here we can declare type  with  Type Annotations
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




// how to use function
const myFunc = ():void => { // no return void type
    console.log('hello ! ');
}

myFunc()

const myFunc1 = ():number => { // its not void it is return a number value; its not only return number return everything
    return 5 * 4
}
console.log(myFunc1());


function abcd():number { // normal function
    return 5 * 5
}

let func: Function;
func = ():string => {
    return "hello world"
}

// function parameter


const multiplyTwoNumber = (a: number, b: string, c?: number, d: string = 'Riye'): number => { // here c is optional parameter and d is default value
    console.log(b + ' '+ d);
    return a * 5;
    
}

multiplyTwoNumber(4, 'hello my dear')



//type alias

type Users = {
    name: string,
    role: string,
    gender: string,
    age:number
}

const admin:Users = {
    name: 'Rakib',
    role: 'admin',
    gender: 'male',
    age:23
}

const member:Users = {
    name: 'Islam',
    role: 'member',
    gender: 'male',
    age:24
}

//Function signatures

let add: (a: number, b: number) => number; // here it is a function signatures bellow is main function based on above signatures.

add = (a:number,b:number) => {
    return a * b;
}


let calculation:(x:number,y:number,z:string)=>number

calculation = (a:number,b:number,c:string) => {
    if (c === 'minus') {
        return a + b
    } else {
        return a - b
    }
}

console.log(calculation(4,5,'add'))