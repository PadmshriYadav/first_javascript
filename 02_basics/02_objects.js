// key-value pairs that make up an object
const mySymbol = Symbol("my_key")
// The Symbol is declared in a variable outside the object.

const JsUser = {
    name:"ayushman",
    "full name" :"ayushman khurrana",
    [mySymbol]: "key to unlock",//You can now access the Symbol key using the variable reference
    age:40,
    location: "chandigarh",
    email:"padmshri@gmail.com",
    isLoggedIn :false,
    lastLoginDays:["monday",["saturday"]]

}

console.log(JsUser.name);//ayushman
console.log(JsUser["full name"]);//bracket is more safe
// //ayushman khurrana


//------------------------------------------------
//Bracket notation is used when the property name is not a valid JavaScript identifier (e.g., contains spaces, special characters, or starts with a number)
//full name is a string with a space, so you must use bracket notation to access it


// Access the value using bracket notation
console.log(JsUser[mySymbol]);//key to unclock
console.log(JsUser.mySymbol);//unfedind
console.log(mySymbol);//Symbol(my_key)


JsUser.email = "ayushman@goggle.com"
//Object.freeze(JsUser)//lock the value
JsUser.email = "ayushman15@goggle.com"
console.log(JsUser);

/*{
  name: 'ayushman',
  'full name': 'ayushman khurrana',
  age: 40,
  location: 'chandigarh',
  email: 'ayushman@goggle.com',
  isLoggedIn: false,
  lastLoginDays: [ 'monday', [ 'saturday' ] ],
  [Symbol(my_key)]: 'key to unlock'
}*/

//object.create----->singleton(object has only one instance )

//rn objcet liternals

JsUser.greeting = function(){
  console.log("hello js user");
}
console.log(JsUser.greeting());
/*hello js user
  undefined*/

  console.log(JsUser.greeting);//[Function (anonymous)]
  //function refrence

  
JsUser.greetingTwo = function(){
  console.log(`hello js user,${this.name}`)};
  console.log(JsUser.greetingTwo());
  /*hello js user,ayushman
undefined*/


//singleton object
//const singleuser = new Object()//return {}

//non singleton object
 const singleuser = {}//return {}

singleuser.id = "imv24cs137"
singleuser.age = 19
singleuser.name ="padmshri"
singleuser["full name"]= "padmshri yadav"

console.log(singleuser);
/* {
    id: 'imv24cs137',
    age: 19,
    name: 'padmshri',
    'full name': 'padmshri yadav'
  }*/



    const regularUser = {
      email : "some@gmail.com",
      fullname : {
        userfullname :{
          fisrtname:"padmshri",
          lastname :"yadav"

        }
      }
    }

  console.log(regularUser.fullname.userfullname["fisrtname"])//padmshri

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 =  {4:"d",5:"e",6:"f"}

const obj3 = {obj1,obj2}
console.log(obj3);
/*{
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '4': 'd', '5': 'e', '6': 'f' }
}
 */
const obj4 = Object.assign({},obj1,obj2)// recommended approach for merging objects
//value will go in {}...{}is target
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
console.log(obj4);

//const obj4 = Object.assign(obj1,obj2)
// the original obj1 object is modified (mutated), and it also becomes the new obj4

const obj5 ={...obj1,...obj2}
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }


//--------------------------object in arrays------------