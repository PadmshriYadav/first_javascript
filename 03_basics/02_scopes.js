//var c= 300

let a =300//gloabal

if (true){//scope
  let a = 10
  const b = 20
//  var c = 30
console.log(`the inner value od a is ${a}`)//the inner value od a is 10
}


console.log(a);//300
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"
    console.log(username);

       function two(){
            const website = "youtube"
            console.log(username);
        }

   // console.log(website); errorcoz out of scope
   two()

    }
    one()//without two,one wont give anything

    //**********child can take from parents,parents cant take things from child***  */

  if (true) {
    const username = "happy"
    if (username === "happy"){
              const website = " youtube "
              console.log(username + website);
    }
    //console.log(website);
  }     
   //console.log(username);                                

   /*happy youtube
   error..website not define
   error...username not defined
   */


   //+++++++++++++++++++++++intresting+++++++++++++++=+
   
   console.log(addOne(5))//6
   function addOne(num) {
          return num + 1
   }
   //
   console.log(addTwo(5))//error
   const addTwo = function(num){
    return num + 2
   }

   addTwo(8)