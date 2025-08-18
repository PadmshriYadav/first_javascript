const score = 400

 const balance = new Number(100) // balance is obj of Numbers
 // score = 452
// you write score = 451 after declaring score with const, you will get a TypeEconsole.log(balance); //[Number:  console.log(score);   //400    console.log(balance.toString());//100 is now a s console.log(balance.toString().len console.log(balance.toFixed(2));//100.00//return string typeconst otherNumber = 12.495console.log(otherNumber.toPrecision(2));//console.log(otherNumber.toPrecision(3));//12console.log(otherNumber.toFixed(3));//12.496

 //+++++++++++maths++++++++++++
 console.log(Math);//Object [Math] {}
console.log(Math.abs(-4));//4
console.log(Math.round(4.6));//5
console.log(Math.round(4.3));//4
console.log(Math.ceil(4.6));//5 console.log(Math.ceil(4.2));//5 console.log(Math.min(4,8,7,51,2));//2
console.log(Math.min(4,8,45,61));//4

/*
Math.floor()	Rounds down to the nearest integer 	floor(7.9) = 7	floor(-7.1) = -8
Math.round()	Rounds to the nearest integer       round(7.9) = 8	round(-7.1) = -7
Math.ceil()  	Rounds up to the nearest integer  	ceil(7.1) = 8	ceil(-7.9) = -7
*/
console.log(Math.random());//value btw 0-1 ,0 (inclusive) and 1 (exclusive)
console.log(( Math.random()*100)+1)//value btween 1-99

const min = 10
const max = 20 

console.log(Math.floor(Math.random()*(max - min +1))+ min )





//==============Date and time==============   

let myDate = new Date();//current time n date
// data type of Date in JavaScript is an object.

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
/*Mon Aug 18 2025 14:54:20 GMT+0000 (Coordinated Universal Time)
Mon Aug 18 2025
8/18/2025
(en-ID,date-month-year)*/

// month is 0-indexed (11 is December)

const newYear= new Date(2025,0,23);//y=m=d=h=s=ms
//Thu Jan 23 2025
console.log(newYear.toDateString());

const mycreatedDate = new Date("2025-01-23");
console.log(mycreatedDate.toDateString());
//Thu Jan 23 2025


const myTimeStamp = Date.now();//Date.now() returns the number of milliseconds that have elapsed since the Unix epoch

console.log(myTimeStamp);
console.log(mycreatedDate.getTime());//getTime() does the same thing milli sec

console.log(mycreatedDate.getDate());//23

console.log(`the best year is ${ mycreatedDate.getFullYear() }.coz its my year`);//the best year is 2025.coz its my year


let bestYear = new Date(2005,11,20);

const formattedDate = bestYear.toLocaleString("default",{
    weekday:"long",

});
console.log(formattedDate);//Tuesday