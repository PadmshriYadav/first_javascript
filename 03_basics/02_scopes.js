//var c= 300

let a =300//gloabal

if (true){//scope
  let a = 10
  const b = 20
//  var c = 30
console.log(`the inner value od a is ${a}`)//the inner value od a is 10
}


console.log(a);//300
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
    console.log(username);

       function two(){
            const website = "youtube"
            console.log(username);
        }

   // console.log(website); errorcoz out of scope
   two()

    }
    one()//without two,one wont give anything

    //**********child can take from parents,parents cant take things from child***  */

  if (true) {
    const username = "happy"
    if (username === "happy"){
              const website = " youtube "
              console.log(username + website);
    }
    //console.log(website);
  }     
   //console.log(username);                                

   /*happy youtube
   error..website not define
   error...username not defined
   */


   //+++++++++++++++++++++++intresting+++++++++++++++=+
   
   console.log(addOne(5))//6
   function addOne(num) {
          return num + 1
   }
   
   //console.log(addTwo(5))//error
   const addTwo = function(num){
    return num + 2
   }

   addTwo(8)
   //let result = addTwo(8); // result = 10
   //console.log(addTwo(8)); // prints 10


   //-----------------this------------------

   // reference to the object that is executing the current function.
//value of this is decided at the time a function is invoked, not when it is defined.

//this refers to the global object (window in a browser, or undefined in strict mode

const car = {
  make: 'Toyota',
  model: 'Corolla',
  
  // 'this' will refer to the `car` object
  displayInfo: function() {
    console.log(`Make: ${this.make}, Model: ${this.model}`);
  }
};

car.displayInfo(); // "Make: Toyota, Model: Corolla"
/////////////////////////////////////////////////////////////
function greet() {
  'use strict';
  console.log(this);
}

greet(); //undefined
// The 'this' keyword refers to the global object (window) or `undefined`.

///////////////////////////////////////////////////////////////////
const user = {
  name: 'Alice',
  
  // This is a method on the `user` object
  greet: function() {
    console.log(`Hello, my name is ${this.name}.`); // 'this' is `user`
    
    // A standard nested function
    function sayNameAgain() {
      // 'this' is NOT `user`, it's `undefined` or the global object
      console.log(`The nested function says my name is ${this.name}.`); 
    }
    
    sayNameAgain();
  }
};

user.greet();
// Hello, my name is Alice.
// The nested function says my name is undefined.


/*if the this is used inside a function nd that function is inside a object..this will give be sujed as a object....if its a function alone/nrml funt without objct ..it will give undefine ....it will give undefined also when its a nested function*/




//=====================================>>>>>>>>>>>>ARROW

const greetUser = function(){
  let username="hitesh"
  console.log(this.username);
}
greetUser()//undefined


const greetUser2 = () => {
  let username="hitesh"
  console.log(this.username);//undefined
}
greetUser2()

const greetUser3 = () => {
  let username="hitesh"
  console.log(this);
}
greetUser3()    //{}


const addNum2 = (num1,num2) => {
     return num1 +num2
 
}

//explicit return uses--->{}
console.log(addNum2(7,8));//15

const addNum3 = (num1,num2,num3) => ({sum:num1 +num2+ num3
                                       ,user:"hitesh"
                                      })
 

console.log(addNum3(7,6,8));//{ sum: 21, user: 'hitesh' }





//............................................................................


//use Immediately Invoked Function Expressions (IIFEs), or FE,to avoid globale scope pollution


//(funtion defnintin)(funtion call);

//(function chai() {console.log('DB CONNECTED');})Call the function(chai());



//named fe
(function chai() {
    console.log('DB CONNECTED');
})

();



//unnamed fe
(() => {
    console.log('DB CONNECTED');
})();


//gives error without";"..to end code 

((name) => {
    console.log(`hii ${name}`);
})


("shreya");//hii shreya
