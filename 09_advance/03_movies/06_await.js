//async function always returns a Promise.
// function's result can be consumed using promise methods .then(), .catch(), await keywordfunction failPromise() {
  function getPizza() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // resolve("Here's your pizza!");
            reject("nono no pixzza")
        }, 2000);
    });
}

async function eatPizza() {
    try{
    console.log("Patient for pizza...");
    //value from the promise is assigned to the 'pizza'
    const pizza = await getPizza(); //wait till resolve "here ur pizaa "...otherwise will throw error
    console.log(pizza);
    }
    catch(error){
        console.log(error);
    }
}

eatPizza();



// handel the error with try nd cathch
