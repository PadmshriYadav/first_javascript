// two main types of execution contexts
//Global Execution Context&Function Execution Context


/*Global Execution Context: This is the default context where all of your top-level code (code not inside any function) runs. 
There is only one global context. In a web browser, the global object is window, while in Node.js, it's global.*/

/*Function Execution Context: A new context is created every time a function is called. 
This context has its own scope for variables and arguments.*/
 
/*eval..property of global */
//----------------------------

// memory creation phase...variables are initialized to undefined during this phase
//execution phase


//The engine uses a Call Stack  to manage these contexts. The global context is always at the bottom of the stack.

// lifo
let val1 =10

let val2 =20

function addNum(num1,num2){
    let total = num1+num2
    return total 
}

let result = addNum(val1,val2)
let result2 = addNum(10,2)

//