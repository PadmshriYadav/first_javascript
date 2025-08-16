const accountId = 12345
let accountEmail = "yadavpadmshri@gmail.com"
var accountPassword = "15483" //better use let to delcare variables
accountCity = "udapur"


// account_id = 23 constant cant re assign

console.log("account_id");
console.log(accountId);

accountEmail = "kaddu@gmail.com"
accountPassword = "54623"
accountCity = "dholakpur"

let accountState;
let accountVillage  //works with n witout";"

console.table([accountEmail,accountId,accountCity,accountPassword,accountState,accountVillage]);  

let username = "bartika"
console.log(username); 

let a = 38;
let b = 28

console.log(a+b);
// let b=2---->error
// cant use let twice
 b = 2//reassign a let variable,not re declare

console.log(a+b)

let num1 = 2
let num2 = 3
let c = num1;

num1=num2;
num2=c;

console.log("numm1 is",num1);
console.log("numb2 is",num2);
