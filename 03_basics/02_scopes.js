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
    one()//without two one wont give anything

    //**********child can take from parents,parents cant take things from child***  */

    