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



const arr = new arr(1, 2)
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

// function myFunction(arg1, arg2) {
//   this.firstName = arg1;
//   this.lastName  = arg2;
// }
// const me= new myFunction("ni", "ka")
// myFunction.prototype.age = 22
//  console.log(`my age is ${me.age} `)



//  const human = {
//   color : ["white", "black", {
//     one:"light",
//     two:"dark"    
//   }] ,
//    age :{
//       curage:{
//         current: 20+1
//       },
//       prevage: "20"
//    }, 
//   address : "nepal",
//   fullName : "Niranjan"
//  }
//  console.log(human.address)
//  console.log(human.color[2].one)
//  console.log(human.age.curage.current)



//ways to get object values
//  const {color , fullName, age} = human
//  console.log(`${fullName} is blank and age is ${age}`) 
//  console.log(`${human.color} and ${human.age}`)

//  for (y in human){

//   console.log(`${y} equals to ${human[y]}`)
//  };

//  const mapp = new Map()
//  mapp.set('1', 'one')
//  mapp.set("nep", 22)
//  console.log( mapp.get('nep'))
//  console.log(mapp.entries())
//  console.log(mapp.size)

//======JSON=====
// let text = '{ "employees" : [' +'{ "firstName":"John" , "lastName":"Doe" },' +'{ "firstName":"Anna" , "lastName":"Smith" },' +'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
// console.log(text)
// const obj = JSON.parse(text);
// console.log(obj.employees[1].firstName+ " "+obj.employees[0].lastName )





//=============DESTRUCTING OF OBJECT=============
const superheroes ={
  top: "Superman",
  mid: "Ironman",
  last:{
    shit: "Vision",
    worse: ["flash", "hwakeye", "groot"]
  } 
}
//let {a, b, c, d} = superheroes  // in object we cant destructure by using different names rather than declared like an array

// let {top, mid, last} = superheroes
// console.log(top)//output =  Superman
// console.log(mid)// output = Ironman
// console.log(last)//output = { shit: 'Vision', worse: [ 'flash', 'hwakeye', 'groot' ] }

// if we want destructure with desired name we can do like this using : to assign new name

// let{ top: legend, mid: okok, last: bad} = superheroes
// console.log(okok) //Ironman is output

// let{ top: legend, mid: okok, last:{shit:tatti, worse: gu}} = superheroes
// console.log(superheroes.last.shit)// vision
// console.log(tatti)//vision

// console.log(gu); //output [ 'flash', 'hwakeye', 'groot' ]


// since the last object has two object and inside worse there is an array we can destructure like this [] assigning desired name in array
let{ top: legend, mid: okok, last:{shit:tatti, worse:[a, b, c]}} = superheroes
console.log(superheroes.last.worse)//[ 'flash', 'hwakeye', 'groot' ]
//we assigned the array of worse as a, b, c and destructed the array inside the object worse 
console.log(a)// output Flash
console.log(c)//Groot


console.log(typeof (new (class { class () {} })))//object