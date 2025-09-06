//promise is object
//used for addresing callback hell with Promises and the async/await syntax.
//create                       //promise ke andar fn
const promiseOne = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("async function is completed");
        resolve();
        
    },1000)
})

// then------>resolve

promiseOne.then(()=>{
    console.log("promises consumed");
    
})




const promiseA= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({name: "xihm", city:"yuojhg"})
    },1000)
}).then((user)=>{
    console.log(user);
}).then((user)=>{
    console.log(u)
})

// When you call resolve({ name: "xihm", city: "yuojhg" })
// you are telling the promise that the asynchronous operation was successful(chnded  promise's state from pending--->fulfilled) and
//  here is the result of that operation.
//  This resolved value is then passed to the .then() method's callback function

const promiseB = new Promise((resolve,reject)=>{


})