function sayMyName(){
    console.log("s");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("i");
}
 sayMyName()

 //function addTwoNumber(number1, number2){
    //console.log(number1 + number2)
    

 //addTwoNumber(3,4)

 //function addTwoNumber (number1 , number2){
    //let result = number1 + number2
    //return result
 

 //const result = addTwoNumber(3,5)
// console.log( "Result:",result);

function addTwoNumber (number1 , number2){
    return number1 + number2
} 

const result = addTwoNumber(3,5)
console.log("Result:", result);

//function loginUserMessage (username){
    //return `${username} just logged in`
}
//console.log(loginUserMessage("sakshi"));
//console.log(loginUserMessage(""));
//console.log(loginUserMessage());

function loginUserMessage (username){
   if(username === undefined){
        console.log("please enter a username");
        return
   } 
}   

console.log(loginUserMessage());

function loginUserMessage(username = "sack"){
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
