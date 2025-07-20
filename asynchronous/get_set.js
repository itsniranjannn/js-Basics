// ............................ Getter and Setter in js................................//
//to get a value use get    =====    to set the value use set
// if we use a get then must use a set also


// ============= Class based =============//
// class bikes {
//     constructor(name, price){
//         this.name = name
//         this.price = price
//     }
//     get name(){    // this helps to get the name from above class  
//         return this._name.toUpperCase()  // did some encrypt used touppercase method
//     }
   
//     set name(val){   // no need to retun the value in set  //it also takes  param
//         this._name = val  // need to change some in the real param from constructor
//     }

//     get price(){
//         return this._price*2   //multiplies the value of price by 2
//     }
//     set price(val){
//         this._price = val
//     }

// }
// const newBike = new bikes("Duke", 500000)
// console.log(newBike.name);   //DUKE
// console.log(newBike.price);  //1000000


// get and set on old method   ====   function based using define property

// function Teacher (name, password){  //declared a function
//     this._name = name;
//     this._password = password;


// Object.defineProperty(this, 'name', {    //created a define property function with this keyword and passed name
//     get: function(){              // get the value
//         return this._name.toUpperCase();
//     },
//     set: function(val){           //set the value
//         this._name = val;
//     }
// });
// }
// const newTeacher = new Teacher('nir', 12221)
// console.log(newTeacher.name);                 // NIR



//################ Object Based GET AND SET ################//
//in object get and set is litle different from other
const mobile = {  //created an object here
  
        _model : 'samsung',  //using _ makes it private property
        _price : 10000,
        

    get price(){   //bring from memory no problem of _ or not _underscore
        return this._price*2   //multiplies the value of price by 2
    },
    set price(val){  //set to memory no problem of _ or not _underscore
        this._price = val
    }
      
}
const newMobile = Object.create(mobile)  //object .create() helped to create a new object from above
console.log(newMobile.price);
