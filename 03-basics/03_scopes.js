//let a = 10
//const b = 20
//var c = 30

//console.log(a);
//console.log(b);
//console.log(c);


if (true){
    //let a = 100
    const b = 200
    var c = 300
}
//console.log(a);
//console.log(b);
//console.log(c);

 // let and const is block scope and var is global scope

let a = 10
if (true){
    let a = 50
    //console.log("INNER:" , a);
    
}
//console.log(a);





///nested loop or closure

function one(){
    const username = "sakshi"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);

    two()

    
}

one()

if (true){
    const username = "sakshi"
    if (username === "sakshi"){
        const website = " youtube"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);




///// hoisting//

console.log(addone(5));

function addone(num){
    return num + 1
}

 //console.log (addone(5))

const addtwo = function(num){
    return num + 2
}
console.log(addtwo(5))