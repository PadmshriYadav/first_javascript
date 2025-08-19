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
}

