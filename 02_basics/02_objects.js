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
Object.freeze(JsUser)
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