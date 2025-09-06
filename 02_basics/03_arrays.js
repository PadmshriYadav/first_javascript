
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


