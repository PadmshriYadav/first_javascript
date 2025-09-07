//  control how an object's properties




// class Fruits{
//     constructor(name,color,price){
//         this.name = name
//         this.color = color
//         this.price = price
//     }

//      display(){
//         return `${this.name} is of ${this.color} and off rupee ${this.price}`
//     }

//     get color(){
//         return `${this._color}`
//     }

//     set color(inputcolor){
//         this._color = inputcolor
//     }
// }

// const buyer1= new Fruits("apple","red","150")
// console.log(buyer1.display())
// const buyer2= new Fruits("mangop","yellow","80")
// console.log(buyer2.color);

//-----------------------------------Using Object.defineProperty()

function Fruits(name,color,price){
    this.name = name
    this._color = color
    this.price = price
    Object.defineProperty(this,'color',{
        get: function(){
            return this._color;
        },
        set: function(valu){
            this._color = valu;
        }
    })
}
const buyer1 = new Fruits("apple","red","150")
console.log(buyer1)
console.log(buyer1._color)
console.log(buyer1.color)
 




