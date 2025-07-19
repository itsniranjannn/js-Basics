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



function kheladi (player , sport, age){
    this.player = player
    this.sport = sport
    this.age = age
}
const player1 = new kheladi ('NeyMar Jr', 'football', 28)

const player2 = new kheladi ('Bhurtel', 'cricket', 28)

const player = new kheladi ("Sandeep lamichane", 'cricket', 27)

kheladi.prototype.printme= function(){   // created a prototype function this can be used by any object now
    console.log(`this is  kheladi no 420 ${this.player}`)
}
player1.printme()  // this is  kheladi no 420 NeyMar Jr
player2.printme()  //this is  kheladi no 420 Bhurtel
player.printme()  //this is  kheladi no 420 Sandeep lamichane



kheladi.prototype.length = function(){   // created a function for calculating lengeth of string
    console.log(`length is ${this.player.trim().length}`)
}
player1.length()//length is 9   
player2.length()//length is 7
player.length()//length is 17