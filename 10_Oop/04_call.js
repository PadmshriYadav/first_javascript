// function TellName(name){
//     console.log(`hellow  ${this.username}`)
// }

// function CreatUser(usrname,email,pswrd){

    
//     this.username= usrname
//     this.email= email
//     this.pswrd = pswrd
//    TellName.call(this)
// }

// const user = new CreatUser("ram","y@gmail","three")//new-->{}
// console.log( user)

//--------------------------------------------------------------


function TellName(name){
    this.username = name
    console.log(`hellow  ${this.username}`)
}

function CreatUser(name,email,pswrd){
    //.call() to  bind  'this' tell name to the empty object created by new
    // ..nd name is apssed to tellname
    
   TellName.call(this,name)
    this.email= email
    this.pswrd = pswrd

}

const user = new CreatUser("ram","y@gmail","three")//new-->{}
console.log( user);