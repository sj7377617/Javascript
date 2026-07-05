// # Primitive :-

// type 7  : String , Number , Boolean , null , undefined , Symbol , BigInt 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34265625467687785n

// Reference (Non- primitive) :-

//Array , Object , Functions

const heros = ["shaktiman ,'naagraj", " dogs "];

let myObj = {
    name: "sakshi",
    age: 18,
    
}


const myfunction= function(){
   console.log("Hello world");
   
}

console.log(typeof anotherId);


//++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive) , Heap (Non-primitive)

let myName = "sakshi"

let anothername = myName
anothername = "jaiswal"

console.log(myName);
console.log(anothername);

