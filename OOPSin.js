///------------Inheritance in CLASS       js---------------
///inheritence is a ability of inheriting the propertise of parent class by the derived child class. 


///here i have created a class with constructor
// class phone {  // class name phone
//     constructor(name, price ){  //has passes 2 constructor
//       this.name = name;
//       this.price = price;
//     }

//     method(){  //method can also be inherited so trying to inherit this method of phone class in below laptop class
//         console.log(`this ${this.name} costs ${this.price}`)
//     }
// }


// class laptop extends phone{//to apply inheritence must use extends keyword 
    
//     constructor (name, price, model){ //new value is passed  here to make it different from parent class its optional

//         super(name, price)//must call super constructor in derived class before accessing 'this' or returning from derived constructor
//         this.model = model
//     }
///to inherit method need to declare new method here
//     mahangoxa(){
///then using super constructor to access above method
//         super.method() 
//     }
// }

// let myphone = new phone ("Samsung", 39999) //returns output object = phone { name: 'Samsung', price: 39999 }
// console.log(myphone)
// myphone.method()// this gives =>  this Samsung costs 39999   

// let Mylaptop = new laptop("Dell", 50000, "lal 3380")// object laptop { name: 'Dell', price: 50000, model: 'lal 3380' }
// console.log(Mylaptop)
// Mylaptop.mahangoxa()// method is inherited =>   this Dell costs 50000


// console.log(`this is my phon ${myphone.name}, my laptop ${Mylaptop.name} and these costs ${myphone.price + Mylaptop.price}`)
// let sum = myphone.price + Mylaptop.price  // returns by adding price 89999
// console.log(sum);

//########## POLYMORPHISM ############
//this means in multiple form...............
//basically we can have same named method or fucn but it works differently , gived distinct output
// POLY - multiple           MORPHISM - form
// here we have same method habit that gives different output for each class 
// class person {
// habit(){
//     console.log("humans are lazy being")
// }
// }

// class animals{
//     habit(){
//         console.log("animals are quick, some are friendly and some may be harmful ");
        
//     }
// }

class plants{
    habit(){
        console.log("plants are boon for nature");
    }
}


// const Humans = new person ()
// Humans.habit()//humans are lazy being
// const plant = new plants()
// plant.habit()//plants are boon for nature
// const animal = new animals()
// animal.habit()//animals are quick, some are friendly and some may be harmful



//...........ENCAPSULATION.....................//
// binding methods, function , classes objects in a single unit and controlling the access over the data of obj and methods

// function meroBiopic(bani, ship){     //here i have created a func with 2 param 
//     this.habit = bani;    //this has accessed the params 
//     this.skill =  ship;
// }

// let niranjan = new meroBiopic("overthink", "keixaina")


// niranjan.habit = "ghusghuse";//here i can change my value inside the function very easily due to which any one
///can change my values and interfare with my code ,  FOR what we us encapsulation

// console.log(niranjan)

function meroBiopic(bani, ship){     //here i have created a func with 2 param 
    let habit = bani;    //this has accessed the params 
    this.skill =  ship;
    this.getName = ()=>{   //here after placing in this getname func when we log niranjan we get  meroBiopic { skill: 'keixaina', getName: [Function (anonymous)] }
              return habit
    }
}

let niranjan = new meroBiopic("overthink", "keixaina")
console.log(niranjan) //meroBiopic { skill: 'keixaina', getName: [Function (anonymous)] } Wont get access as its anonymous
//unless we console getName function then we get the access
console.log(niranjan.getName())   //finally we get the output -> overthink