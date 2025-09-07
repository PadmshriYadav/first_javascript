//  adding methods to the prototypes of Object and Array, you are making those methods available to all instances of those types.

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
// this method will be for all  objects(fn ,array,string)
Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}
//  method will for all arrays 
Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// myHeros.hitesh()
//  heroPower.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()


//------------------------------

let str = "hubjl"

String.prototype.len = function length(){
    // In a prototype method,"this" bound to the object that invoked the method. In this case, that object is a string instance.
     console.log(`${this}`);
    console.log( this.trim().length )
}
str.len();//5