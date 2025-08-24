function addTwoNum(number1,number2){//numer1,number2 are parameters
    console.log(number1+number2)
}

addTwoNum(3,4)//7..4,3 are arguments
addTwoNum(3,"4")//34
addTwoNum("3",4)//34
addTwoNum("3",null)//3null
addTwoNum(3,null)//3


const result = addTwoNum(3,5)
console.log(`the result is:${result}`)
/*8
the result is:undefined */


function sumTwoNum(number1,number2){
  //let result = number1+number2
  //return result
  return number1+number2
}
const anwr = sumTwoNum(3,5);
console.log(`the result is:${anwr}`);//the result is:8


//-------------------------------------------------------------------

function loginUserMessage(username){
    if(username === undefined){//can be written as if(!username) checks if the username variable is falsy. A falsy value is anything that evaluates to false in a boolean context.
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("preety"))//preety just logged in
console.log(loginUserMessage())//undefined just logged in


//default value function loginUserMessage(username= "sam"){


//rest or spred (...)

function calculateCartPrice(num1){
          return num1
}
console.log(calculateCartPrice(2))//2
console.log(calculateCartPrice(100,2000))//100

function calculateTheCartPrice(...num1){
          return num1
}
console.log(calculateTheCartPrice(100,2000))

function calculateThePrice(var1,var2,...num1){
          return num1
}
console.log(calculateThePrice(100,200,500,800))
//[ 500, 800 ]...var1=100,var2=200,..num1=[500,800]


//.............object in function......

const user = {
    username: "hitesh",
    price: 199
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// Call the function with the 'user' object
handleObject(user);




//..................array in function--------------


const  myArray =[8,9,78,990,56,63]

function ReturnSecbValue(givenArray){
    return givenArray[1]
}

console.log(ReturnSecbValue(myArray))//9