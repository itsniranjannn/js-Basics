//-----------------Object---------------
//------to check that object is empty or not-------
// const obj = {
//     name: "Nranjan",
//     age : 21,
// }
// if(Object.keys(obj).length === 0){
//     console.log("Nthg inside obj");
    
// }else{
//     console.log("there is somethig plz check")


// technique to access the values of object
/*const obj = {
    name: "Niranjan",
    age : 21,
    
}
console.log(obj.hasOwnProperty("name"))
console.log(obj.name)

console.log(obj["name"])
console.log(typeof obj["age"])
Object.freeze(obj)//this is used when we dont want any changes on the object
obj.name= "niranjan"
console.log(obj["name"])



const arr = new Array(1, 2)
console.log(arr);

const onnj = new Object ({name: "niranjan", age : 22,})
console.log(typeof onnj)*/

/*// OBJECT CONSTRUCTOR
function Person(first, last, age, eye) {
// this  is constructor we need to define first in constructor to add in object, if need to add any thing add above after age, nation
  this.firstName = first; 
  this.lastName = last;
  this.age = age;

}
const me = new Person("nirannjan", "katwal", 21, "black");


//but we can use prototype to add in construction
Person.prototype.nation = "nepal";
console.log(me)//output: Person { firstName: 'nirannjan', lastName: 'katwal',  age: 21  eyeColor: 'black'}
console.log(`this is ${me.firstName}, ${me.age} years old from ${me.nation}` )//this is nirannjan, 21 years old from nepal


Person.prototype.fullName = ()=>{
    return me.firstName + " " + me.lastName
}
console.log(me.fullName())

// function car(name, model){
//     this.name = name;
//     this.model = model;
//     }
//     const meroCar = new car ("TATA", 200);

//     console.log(`this ${meroCar.name} is my car with model no ${meroCar.model}`)*/



/*
///func   fname   constructors
  function Car(model, name, price){ //constructor declaration
    this.carModel = model;
    this.carName = name;
    this.carPrice = price;
    }

const newCar = new Car (2000, "toyota", 4000000);

console.log(`this is my car with model no ${newCar.carModel}, name ${newCar.carName}, and it costs ${newCar.carPrice} `)
///output : this is my car with model no 2000, name toyota, and it costs 4000000



/// to add new we use prototype
Car.prototype.color = "black";
console.log(`this is my car with model no ${newCar.carModel}, name ${newCar.carName}, 
    and it costs ${newCar.carPrice}, looks bold in ${newCar.color}`)
    ///output : this is my car with model no 2000, name toyota, and it costs 4000000, looks bold in black

    function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  
}

const myMother = new Person("Sally", "Rally", 48, "green");


///methods of object
const myFather = {firstName: "John", lastName: "Doe", age: 50 };// 
console.log(`my mom name is ${myMother.firstName} ${myMother.lastName}`)
 Object.assign(Person, myFather)
let text = Object.entries(Person)
console.log(typeof text)*/


/*//GET FUNC keywords
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  }
};
console.log(`this is my language ${person.lang}`)


//Set Function
const humans  = {
  color : "white",
  age : 21, 
  fullName:"" , 
  class: "",
set myclass(myclass){
  this.class = myclass;
},

// set name(name){
//   this.fullName = name;
// }
};
humans.class = 12
console.log(humans.class)
// humans.name = "Niranjan"; 

// console.log(humans.fullName)

//both func
const human = {
  color : "white",
  age : 21, 
  address : "nepal",
  fullName : "",
  
  // get add(){         //this is get
  //   return this.address;
  // },
  // set myname(myname){     //this is set
  //   this.fullName = myname
  // }
};
// console.log("this is my ad " + human.add)  //for get
// human.myname = "Niranjan Katwal"           //for set
// console.log(`hi its me ${human.fullName}`) */

function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName  = arg2;
}
const me= new myFunction("ni", "ka")
myFunction.prototype.age = 22
 console.log(`my age is ${me.age} `)

