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

// function Teacher (name, password){
//     this._name = name;
//     this._password = password;


// Object.defineProperty(this, 'name', {
//     get: function(){
//         return this._name.toUpperCase();
//     },
//     set: function(val){
//         this._name = val;
//     }
// });
// }
// const newTeacher = new Teacher('nir', 12221)
// console.log(newTeacher.name);




