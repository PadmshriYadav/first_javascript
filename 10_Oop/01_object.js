//how this works


const students = {
    name: "ram",
    usn: 8,
    //method of object
    stdDtails: function(){
        console.log(this);//this------>object students
    } 
}
 console.log(this);//this ------>global object(nodejs)---->{}

//--------------------------------------------------------------------------




function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);//added more property to User

    }
}

// # object created by the constructor function 
//  capitalized.--->helps to identy constructor function that should be used with the new keyword
// new keyword---->A brand-new, empty object is created in memory
//User function is executed--->this is bound to that new, empty object

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);//[Function: User]
console.log( userOne instanceof User);//true
console.log(userTwo);