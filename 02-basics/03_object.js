//object literals
const mySym = Symbol("key1")
const JsUser ={
    name: "sakshi",
    [mySym]: "mykey1",//+++++++++ symbol definig
    "full name" : "sakshi jaiswal",
    age : 18,
    location : "hingoli",
    email : "sakshii@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday","saturday"]

}

//console.log(JsUser.email);
//console.log(JsUser["email"]);
//console.log(JsUser["full name"]);
//console.log(JsUser[mySym]);


JsUser.email = "sack@gmail.com" // email change (=)
//console.log(JsUser);

JsUser.email ="sakshi@google.com"
//Object.freeze(JsUser)              // freeze use for valur not chnage
JsUser.email = "sakshi@chatgpt.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JsUser");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JSUser , ${this.name}`);
    
}
console.log(JsUser. greeting());
console.log(JsUser.greetingTwo());

