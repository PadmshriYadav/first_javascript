//array

const myArr =[0,9,8,7,6]//make shallow copies(share same refrence point)
const myArr2 =["hii","helloe","byee",2,451]//JavaScript, an array can have different data types
console.log(myArr[1]);//9
console.log(myArr[0]);//0

const myArr3 = new Array(1,2,3,"bat")
console.log(myArr3[0]);//1
console.log(myArr3[3]);//bat

myArr3.push("ball")

console.log(myArr3);//[ 1, 2, 3, 'bat', 'ball' ]              
myArr3.pop()
console.log(myArr3);//removes last value,[ 1, 2, 3, 'bat']
//----------------------------------------------------------------------

//shiftingggg

myArr3.unshift(9);
console.log(myArr3);//[ 9, 1, 2, 3, 'bat' ]
//shift() and unshift() are methods used with JavaScript arrays to add or remove elements from the beginning of the array.
myArr3.shift();
console.log(myArr3);//[ 1, 2, 3, 'bat' ]

myArr3.shift();
console.log(myArr3);//[ 2, 3, 'bat' ]



----------------------------------------------------------------------

console.log(myArr3.includes(9));
console.log(myArr3.indexOf("bat"));
console.log(myArr3.indexOf(456));

const newArray = myArr3.join()// concatenates all the elements of an array into a string
console.log(newArray);
console.log(typeof newArray);
/*2,3,bat
string */


//.slice([start], [end]) method extracts a section of an array and returns a new array containing the extracted elements. The original array remains unchanged. 
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const slicedAnimals = animals.slice(2, 4); 

console.log(slicedAnimals); // Output: ["camel", "duck"]..2,3...not 4
console.log(animals);// ["ant", "bison", "camel", "duck", "elephant"]



//

const animals_2 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

const splicedAnimals = animals_2.splice(2, 4); 

console.log(splicedAnimals);//removes nd return the removed array inclues 4

//[ 'camel', 'duck', 'elephant' ]

console.log(animals_2);//[ 'ant', 'bison']...chngeses the original




//-------------------------------------------------------------------------------

let animalsName = ['cow', 'goat', 'lion'];

let primaryColors = ['red', 'yellow', 'blue']

animalsName.push( primaryColors);//Add as a single element to the end
console.log(animalsName)//[ 'cow', 'goat', 'lion', [ 'red', 'yellow', 'blue' ] ]

//the push() method modifies the original array directly.



let secondaryColors = ['green', 'orange', 'purple']

//primaryColors.concat(secondaryColors);
// concat() method does not modify the original array. Instead, it returns a new array that contains the merged elements.

let allColors = primaryColors.concat(secondaryColors);
console.log(allColors);//[ 'red', 'yellow', 'blue', 'green', 'orange', 'purple' ]

//spread syntax (...)
const all_new_heroes = [...animalsName,...primaryColors,...secondaryColors]

console.log(all_new_heroes);//breaking glass in peaces
/*[
  'cow',
  'goat',
  'lion',
  [ 'red', 'yellow', 'blue' ],
  'red',
  'yellow',
  'blue',
  'green',
  'orange',
  'purple'
] */


  //flat()create a new array with all sub-array elements concatenated into it recursively
const numbers = [1, 2, [3, 4],[8,9]];
const newNumbers = numbers.flat();

console.log(newNumbers);
// Output: [1, 2, 3, 4, 8, 9]



const deepArray = [1, [2, [3, [4, 5]]]];
const twoLevelsFlat = deepArray.flat(2);
console.log(twoLevelsFlat);
// Output: [1, 2, 3, [4, 5]]

//Array.isArray() returns a boolean 


console.log(Array.isArray("hellow"));//false
console.log(Array.from("hellow"));//[ 'h', 'e', 'l', 'l', 'o', 'w' ]
console.log(Array.from({name:"hellow"}));//empty []


// Array.of()creates new Array  from a variable number of arguments, regardless of the number or type of the arguments.
console.log(Array.of(1, 'hello', true)); // [1, 'hello', true]

//Array.of(7) creates an array containing a single element, the number 7.

//new Array(7) creates an empty array with a length of 7

const sevenEmptySlots = new Array(7);

console.log(sevenEmptySlots);
// Output: [ <7 empty items> ]
