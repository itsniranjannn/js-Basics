//~~~~~~~~~CALL APPLY AND BIND~~~~~~~~~~~~~

const luxury = {
  car: "BMW",
  bike: "hayabusa",
  building : "ondola",
  luxi :  function(price, color){
    console.log(`for living luxirious life need to have ${this.car} of ${color} color, ${this.bike} and building like ${this.building} in price of ${price}`)
    
  }
}

const myself = {
  car: "lamborghini",
  bike: "harley",
  building: "7 story"

}
 // here call applys the function of above object luxi
luxury.luxi.call(myself) // output = for living luxirious life need to have lamborghini, harley and building like 7 story
  //we can also pass the params using call
  luxury.luxi.call(myself,   100000000, "black")//for living luxirious life need to have lamborghini of black color, harley and building like 7 story in price of 100000000

// in apply we need to pass params in Array
luxury.luxi.apply(myself, [500000000, "blue"])//for living luxirious life need to have lamborghini of blue color, harley and building like 7 story in price of 500000000

//bind helps to assign i new variable
let mychoice = luxury.luxi.bind(myself,   100000000, "white")
console.log(mychoice)//[Function: bound luxi]

mychoice()//for living luxirious life need to have lamborghini of white color, harley and building like 7 story in price of 100000000




//   const myself ={ 
//   details: function(city, country) {
//     return this.person + " " + this.age  +"," + city + "," + country;
//   }}
//   const me = {
//     person : "good",
//     age : 1,
// }
// const me2 = {
//     person : "bad",
//     age : 1,
// }

// console.log(myself.details.call(me, "ktm", "Nepal"));   //calls details method of myself using it of me ,  takes method seperately
// console.log(myself.details.apply(me2, ["ktm", "nepal"]));  //applys details method of myself using it of me2, takes methood as array

//bind  : binds / borrows from other object like from man 2 
//   const man ={ 
//  person : "good",
//     age : 1,
//   details: function(city, country) {
//     return this.person + " " + this.age  +"," + city + "," + country;
//   }}
// const man2 = {
//     person : "bad",
//     age : 1,
// }
// let details = man.details.bind(man2, "kath", "Nep");
// console.log(details())




