// .catch() method is used to handle rejections (errors) in a promise chain
//  designed to only execute when a promise is rejected
// ----------------------------------------------------------------
//.finally() method is used to run a piece of code regardless of whether the promise was resolved or rejected
//.finally() will execute whether the promise is resolved (.then()) or rejected (.catch()).

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let age =20
        if(age>18){
            resolve("elligibale for ciminal offrences been apllied")
        }else{
            reject("error:going to juvvienile")
        }
    },1000)
}).then((result)=>{
    console.log(result)

}).catch(()=>{
    console.log("error")
}).finally(()=>{
     console.log(" promise is either resolved or rejected")
});




