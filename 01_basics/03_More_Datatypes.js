//primitive data types

//7 types: string,number,boolean,null,undefined,symbols,BigInt

//js is dynamically typed language..no need to declare variable type when creating
//let x= 100;
//x="hey"

const id = Symbol("1234")
const another_Id = Symbol("1234")

console.log(id === another_Id);//false
//symbols are unique


const number = 451652n

console.log(typeof number) //bigInt



//refrence/(non primitive)

//array,objects,functionns..datatype object

// arrray 
const num = ["hii","hello","they","there","when","why"]

//object
let myObj ={
    name: "padmshri" ,
    age: 22,
    
}

//stored in variable
myObj1 ={
    name: "padmshri" ,
    age: 22,
    
}

console.log(typeof myObj1)
console.log(typeof myObj)
console.log(myObj1)

/*object
object
{ name: 'padmshri', age: 22 }*/

//functions

const myFunction = function(){
    console.log("hellow worlds")
}

console.log(myFunction)

//--------memories---------


//Stack (primitive-->string,numm,null,bigint,boolean,symbols,undefined)---copy 


let usn1 = "anjana@gmail.com"

let usn2 = usn1
usn2 = "bhumi@gmail.com"

console.log(usn1)//anjana@gmail.com

console.log(usn2)//bhumi@gmail.com


// Heap(non-primitive-->function,array,object)...


let person1 = {
      email:"padmshri@gmsil.com",
      usn:1245
}

let person2 = person1
 person2.email ="ayushi@goggle.com"

 console.log(person2.email);
 console.log(person1.email);
//  ayushi@goggle.com
// ayushi@goggle.com.....heap uses refrences, chnges happens in actull value

//----------STRINGS------------


const username = "shreya"
const repoCount = 20

console.log(username + repoCount);
console.log(`hello my name is ${username} and my repo count is ${repoCount}`);
//hello my name is shreya and my repo count is 20


//key"new"..uses object


const gameName = new String('asus vivobook')
//gameName is object of string
/*String {'asus vivobook'}

0: "a"

1: "s"

2: "u"

3: "s"

4:""

5: "v"

6: "1"

7: "v"

8: "o"

9: "b"

10: "0"

11: "o"

12: "k"

length: 13*/

console.log(gameName[0]);
console.log(gameName.__proto__);// __proto__ was used to get and set the prototype of an object. For example, obj.__proto__ gives you a reference to Object.prototype (or whatever the prototype is).
//a
//{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
// 13
// ASUS VIVOBOOK

console.log(gameName.charAt(7))//v

console.log(gameName.indexOf("b"));//9

const newString = gameName.substring(0,4)//wont include 4th

const String_2 = gameName.slice(0,4)

console.log(newString)
console.log(String_2)
// asus
// asus

const String_3 = gameName.slice(-6,-4)//vo
// slice can take negative value
console.log(String_3)
//(-4,-9)...slice() always moves forward from the start-----> to the end index-9.
//-9-8-7-6-5-4-3-2-1

let stringTrm = "  oohoo"
//oohoo
console.log(stringTrm.trim())//removes whitespaces from both begining nd ending