// objects inherit from other objects, not from a class.
// Every function, when it's created, automatically gets a prototype property.
//we write .prototype to access that property and add methods or properties to it.



// you define a function like function MyFunction() {}
// JavaScript engine creates a function object.
//it--->creates a object and assigns it to the prototype property of your function.
//At this point, MyFunction.prototype is an empty object: {}.

//MyFunction.prototype.someMethod = function() {...}
//  doesn't create a new prototype object. 
// it accesses the existing empty object at MyFunction.prototype and adds a new property called someMethod to it.


function User(name) {
    this.name = name;
}

// The prototype object
// This is the blueprint for all User instances.
// We are adding two methods to it.

User.prototype.sayHello = function() {
    console.log( `name is ${this.name}.`);
};

User.prototype.changeName = function(newName) {
    this.name = newName;
};

// Creating instances
const alice = new User('Alice');
const bob = new User('Bob');

alice.sayHello()
alice.changeName('Al');
alice.sayHello();  