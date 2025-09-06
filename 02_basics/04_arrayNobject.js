// === vs ==
//  both h not diffrence in case of array nd Object
//  both search for same memory Reference not content

let myArrayA = [1,2,3] ;
let myArrayB =[1,2,3];
let myArrayC = myArrayA;
myArrayC[0]=5;
console.log(myArrayA==myArrayB);//false
console.log(myArrayA===myArrayB);//false
console.log(myArrayA==myArrayC);//true
console.log(myArrayC);
console.log(myArrayA);

// [ 5, 2, 3 ]
// [ 5, 2, 3 ]



const objA={color:"blue"};
const objB={color:"blue"};
const objC=objA ;

console.log(objB==objA);//false
console.log(objB===objA);//false
console.log(objC==objA);//true