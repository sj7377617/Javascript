const accountId = 123456
let accountEmail = "sakshi@gmail.com"
var accountPassword = "654321"
accountCity = "Hingoli"
let accountState;


// accountId = 2  not allowed

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "ss@g.com"
accountPassword ="232233"
accountCity ="nanded"

console.log(accountId);

console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
