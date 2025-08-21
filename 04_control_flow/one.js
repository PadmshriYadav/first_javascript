//if
//>,<,+,<=,>=,

//== assign,ignors types
//===,strict



//2!=3....quest?true or false


const temp = 190
 if(temp === 200){
    console.log("its 200 here");
 }

else if(temp>200){
    console.log("its more than 200");
 }

 else{
    console.log("its less than 200");
 }

const balance = 1000
 if (balance >500) console.log("test");//test
    //console.log("")

const marks = 1000
 if (balance >500) console.log("test"),
 console.log("test2"); 
 /*test
test2*/

const tem = 200;
const status = "ok";

if (tem == 200 && status == "ok") {
    console.log("Temperature is 200 and the status is ok.");
}
//Temperature is 200 and the status is ok.


const score = 85;

if (score >= 85 && score <= 95) {
    console.log("You got big award!");
}
if (score > 95 || score < 60) {
    console.log("You got small award!");

}//You got big award!

//switch
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/



const month = 2
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("dec");
        break;    

    default:
        console.log("heheh")
        break;
}
//feb



//--------------------TRUTHYYY---FALSYYYY---

const userEmail = "h@hitesh.ai"
if (userEmail) {
    console.log("You hv email");
}
else{
    console.log("You dont hv email");
}


//false,0,-0,BigInt 0n,"",null,underfined,NaN

//"0","false"," ",[],{},function()


const user_mail =[]

if (user_mail.length === 0) {
    console.log("Array is empty");

 }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("object is empty");
}


//-----------nullish coalescing operator "??":null, undefined

let val1 , val2;
val1=5??10
val2 =null??10
console.log(val1);//5
console.log(val2);//10
val3 =null??10??20
console.log(val3);//10



//terniary operator

//condition? true: false

const iceTeaPrice = 100;
 (iceTeaPrice>80) ? console.log("its a more than 80"):console.log("its less than 80")
//its a more than 80