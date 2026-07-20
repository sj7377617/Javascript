function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2));
console.log(calculateCartPrice(200,4000,600));

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,400,500)); // ... rest operator :- for print all value

function calculateCartPrice(val1 , val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200,600,800,1000));

const user = {
    username : "sakshi",
    price : 199
}
function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)


handleObject({
    username : "sakshi",
    price : 399
})

const myNewArray = [200,300,400,500]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));

