const accountId = 14453
let accountEmail = "fazaltaqui@gmail.com"
var accountPassword = "12345"
accountCity = "Hyderabad"
let accountState;

// accountId = 2 // const cannont be changed

accountEmail = "blah@blah.com"
accountPassword = "Lmao"
accountCity = "Mumbai"
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var
because of issue in block scope and functional scope
*/
