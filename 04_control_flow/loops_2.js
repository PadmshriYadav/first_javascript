//for of

/* for (const element of object) {
    
}*/

const greetings = "hellow world!"

for (const i of greetings) {
    console.log(`each char is ${i}`)
}
/*each char is h
each char is e
each char is l
each char is l
each char is o
each char is w
each char is  
each char is w
each char is o
each char is r
each char is l
each char is d
each char is ! */



//maps---------------------------------------------

//Map is a data structure that stores key-value pairs, 
//no dublicates value
//Creates a new Map object.
const myMap = new Map();


myMap.set('in','india')
myMap.set('usa','united state of america')
myMap.set('fr','france')
myMap.set('in','india')

console.log(myMap);
/*Map(3) {
  'in' => 'india',
  'usa' => 'united state of america',
  'fr' => 'france'
} */


  for (const key of myMap) {
      console.log(key)
    
  }
  /*[ 'in', 'india' ]
[ 'usa', 'united state of america' ]
[ 'fr', 'france' ] */

for (const key of myMap.keys()) {
      console.log(key)
    
  }
  /*in
usa
fr */

for (const [key,value] of myMap ) {
      console.log(key)
    
  }
  /*in
usa
fr */

for (const [key,value] of myMap ) {
      console.log(key,value)
    
  }
  /*in india
usa united state of america
fr france */


const user = {
 
  firstName: 'John',

  age: 30,
  isStudent: false,
  hobbies: ['reading', 'hiking', 'coding']
}


//for in 

for (const i in user){
    console.log(i)//keys
}
/*firstName
age
isStudent
hobbies */

for (const i in user){
    console.log(user[i]);//values

}
/*30
false
[ 'reading', 'hiking', 'coding' ] */




//for..of...gives you the value of each element 
//Ideal for iterating over arrays and getting their values



//gives you the key as a string.
//deal for iterating over object keys


//-----------------------for each------


//You call the forEach() method on an array