
class Parents{
    constructor(parentname,address){
        this.parentname= parentname
        this.address = address
    }
  
    //cant be acces by other class
    static parentdetail(){
        return ` ${this.parentname} who live near ${this.address}`
    }
}



class Student extends Parents{
    
    constructor(studentname,usn,stream ,parentname,address){
        super(parentname,address);
        this.name =studentname
        this.usn =usn
        this.stream =stream

    }

    
    displayInfo(){
        console.log(`${this.name} is a child of ` + super.parentdetail() +` ,is in  ${this.stream}`)
    }

    displayusn(){
        console.log(`${this.name} is usn:  ${this.usn}`)
    }
    
} 

const student1 = new Student("ayushi", "23", "scienc","mr Kmar","balajiPark")

student1.displayInfo();
student1.displayusn();
console.log( student1 instanceof Parents)
////errrorrr