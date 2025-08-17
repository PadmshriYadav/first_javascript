
let age = 18//num
let name = "anjana"//string
//null  is object---empty
//undefined is a type itself..value mot assign yet
//symbol

console.log(typeof"age")

let student1 = true; //boolean
console.log("am i dumb?" + student1);


console.log(5=="5")
//true(loose equility checks, not type numb5,string5)

console.log(5==="5");
//false(strict equlity)


let score = "33"

console.log(typeof score);

let score2 = "33"

let valueInNumber = Number(score2) ///basic conversion

console.log(typeof  valueInNumber);

let score3 = "33aa"

let valueInNumber1 = Number(score3)

console.log(typeof  valueInNumber1);
console.log(valueInNumber1); //NaN is datatype

console.log(typeof Boolean (" "));//boolean
console.log(Boolean (" "));//true
console.log(Boolean (""));//empty--->false

console.log(typeof  (false));



//--------operations------

let value = 3;
 
let negvalue = -value

console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);


let str1 = "hello"

let str2 = " hansa"
console.log( str1 + str2 )

console.log("1" + "2") // str..12

console.log(1+ "2")//str..12

console.log("1" + "2"+ "2")//122

console.log("1" + 2 + 2 )//122

console.log( 1 + 2 + "2" )//32

let bag=20;
console.log(++bag);

console.log(+""); //0 



console.log(null > 0);//faslse
console.log(null == 0);//false
console.log(null >= 0);//true
//comparison operators >,< are difrrnt from equlity check ==

console.log("2" >1); //true...string--->num
console.log("02" > 1);//true