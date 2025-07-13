//~~~~~~~~~~~~~~~prototype in objects~~~~~~~~~~~~~~~~
// const company = {   //here inside my company object we created a function
//     compf(){  //thisis function
//      console.log(`this is our company ${this.compName} at ${this.address}`)
//     }
// }
// const comp2 ={
//     compName : "Niranjan Ltd",  // here i declared some keys & values in this object
//     address : "ktm",
// }

// comp2.__proto__ = company   // here i created a prototype using __proto__  this makes  comp2 object to use compf() as its prototype
/// output = this is our company Niranjan Ltd at ktm


//~~~~~~~~~~~~this keyword~~~~~~~~~~~~~~~~
// const company = { 
//      compName : 'nk pvt',
//      address : "ktm",
//      compf : () => {  
//      console.log(`this is our company ${this.compName} at ${this.address}`)
//     }
// }
// company.compf()   //this is our company undefined at undefined => in Arrow function this gives undefined due to scope

// const company = { 
//      compName : 'nk pvt',
//      address : "ktm",
//      compf(){  
//      console.log(`this is our company ${this.compName} at ${this.address}`)
//     }
// }
// company.compf()//this is our company nk pvt at ktm

//Example #1
// const person = {
//   name: "John",
//   country: "USA",
//   city: 'New York',
//   dispaly: () => {  //Arrow function
//     console.log(`This is ${this.name} from ${this.city}, ${this.country}`)
//   },
// }

// person.display() //output: This is from undefined, undefined

// Example #2
// const person2 = {
//   name: "John",
//   country: "USA",
//   city: 'New York',
//   dispaly() {
//     console.log(`This is ${this.name} from ${this.city}, ${this.country}`)
//   },
// }

// person2.display() //output: This is John from New York, USA


// In JavaScript, regular functions (like display() in the second example) have their own this binding that depends
//  on how they are called. When we call person.display(), this inside the function refers to the person object.

// However, arrow functions behave differently. They don't have their own this binding, instead, they inherit it 
// from the surrounding context where they are defined. In the first example, the arrow function is defined within
//  the object literal. At that point, this refers to the global object (usually window in browsers). 
// And here this.name will return an empty string because it is the windows' property which gets/sets the name of 
// the window's browsing context. That is why the output of first example is "This is from undefined, undefined",
//  instead of "This is undefined from undefined, undefined".


//~~~~~~~~~~~~~~~~~~~~~~~~ classes ~~~~~~~~~~~~~~~~~~~~~~~~~~
class myCar{   //this is a class that acts as a templete to create an object
    constructor(brand, price){  //here brand and price are (param) or propertise  of constructor
        this.myBrand = brand
        this.myPrice = price 
    }
}

const tata = new myCar ('toyota', 2000000)
console.log(`tata brand is ${tata.myBrand}, and it costs ${tata.myPrice}`)//tata brand is toyota, and it costs 2000000


//________________inheritance in classes-----------------------
class goodstudent {
    read(){
        console.log(`reading books`);
        }
    write(){
        console.log(`writes notes`);
        
    }
}
const ram = new goodstudent();  // if run ram.write() = writes notes

class badstudent extends goodstudent{  //here badstudents inherits from good student   
    //it has access to read and write fuction of good student
    activity(){
        console.log(`does bully, disobeident`);
        
    }
}

const ravan = new badstudent();   // if run ravan.write() = writes notes   // ravan.activity() = does bully, disobeident
