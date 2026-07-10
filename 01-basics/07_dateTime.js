//let myDate = new Date()
//console.log(myDate);

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreateDate = new Date(2023,0,23)
//console.log(myCreateDate.toDateString());

//let myCreateDate = new Date(2023,0,23,5,3)
//console.log(myCreateDate.toLocaleString());

let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleString());




let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreateDate.getTime());
console.log(Date.now());

console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);

console.log(newDate .getMonth());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
     weekday : "long"
})
console.log(newDate.toLocaleString());

