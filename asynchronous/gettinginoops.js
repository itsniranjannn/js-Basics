//````````````` Prototype And new keyword ```````````````````//


// function kheladi (player , sport, age){
//     this.player = player
//     this.sport = sport
//     this.age = age

//     let welcome = ()=>{
//         console.log(`Welcome! Mr ${this.player} ,  you are good at your ${this.sport}, at this age ${this.age}`)
//     }
//     welcome()

// }

// const player1 = new kheladi ('NeyMar Jr', 'football', 28)

// const player2 = new kheladi ('Bhurtel', 'cricket', 28)



// function kheladi (player , sport, age){
//     this.player = player
//     this.sport = sport
//     this.age = age
// }
// const player1 = new kheladi ('NeyMar Jr', 'football', 28)

// const player2 = new kheladi ('Bhurtel', 'cricket', 28)

// const player = new kheladi ("Sandeep lamichane", 'cricket', 27)

// kheladi.prototype.printme= function(){   // created a prototype function this can be used by any object now
//     console.log(`this is  kheladi no 420 ${this.player}`)
// }
// player1.printme()  // this is  kheladi no 420 NeyMar Jr
// player2.printme()  //this is  kheladi no 420 Bhurtel
// player.printme()  //this is  kheladi no 420 Sandeep lamichane



// kheladi.prototype.length = function(){   // created a function for calculating lengeth of string
//     console.log(`length is ${this.player.trim().length}`)
// }
// player1.length()//length is 9   
// player2.length()//length is 7
// player.length()//length is 17


//                Call                   //
// function setname (name){
//     this.name = name
// }

// function user(name, address, id ){
//    setname.call(this, name)   //when i use call to hold the refrence there all the execution context are removed of above function
//    here i have placed this cause when all context are removed this of abobe have nothing so i gave this to refer this function context
//     this.address = address
//     this.id = id
// }

// let user1 = new user('nirajan', 'kathmandu', 20)
// console.log(user1) //user { name: 'nirajan', address: 'kathmandu', id: 20 }


//==============  Class ==============//
// class login {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     newUserName(){   // created a function to chnage username
//         return`Mr ${this.username}`
//     }
// }

// login.prototype.encrypt = function(){  //created fuction using prototype
//     console.log(`you pass word is encrypted : a2${this.password}3b4`)
// }

// const newUser = new login ('niranjan', 'n@gmail.com', '981676')

// newUser.encrypt()  //you pass word is encrypted : a29816763b4
// console.log(newUser.newUserName()) //Mr niranjan