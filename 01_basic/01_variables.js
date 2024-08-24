const accountId= 144533
let accountEmail ="shubham.07june@gmail.com"
var accountPassword = "12345"
accountCity = "Pune"
// accountId = 2 //not allowed
accountPassword = "231222"
accountCity = "Mumbai"
console.log(accountId);
/*
perfer not to use var , because of issue in the block scope and funtional scope 
*/

console.table([accountId,accountEmail,accountPassword,accountCity]);
