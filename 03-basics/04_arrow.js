
const user = {
    username : "sakshi",
    price: 999,

    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`); /// this use for print current context 
        //console.log(this);
        
    }

    
}
//user.welcomeMessage()
//user.username = "sany"
//user.welcomeMessage()

//console.log(this);


//function chai(){
    //let username = "sakshi"
    //console.log(this);   /// this not use in function
    

//chai()

//const chai = function(){
  //  let username = "sakshi"
    //console.log(this.username);
    

//chai()

const chai = () =>{
    let username = "sakshi"
    console.log(this . username);
    console.log(this);
    
    
}
//chai()


///arrow function

//() => {}  synatx

//const addTwo = (num1 , num2) => {
  //  return num1 + num2

//console.log(addTwo(3,4));


//const addTwo = (num1 , num2) => num1 + num2
//console.log(addTwo(3,4));

//const addTwo = (num1 , num2) =>(num1 + num2) // return use only when {} brecas are used its is call impilicit return and when return use that call expilicit return

//console.log(addTwo(3,4));

const addTwo = (num1 , num2) => ({username: "sakshi"}) // object define
console.log(addTwo(3,4));

