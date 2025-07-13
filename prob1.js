//qn 1 is to create user with 2 proopertise , and have viewdata method

// class user {
//     constructor(name, email){
//     this.uName = name
//     this.uEmail = email
//     }
//     viewData(){
//         console.log(`this is user ${this.uName}, and useremail is ${this.uEmail}`)
//     }
// }
// const user1 = new user('Niranjan', 'nk@gmail.com')  
// console.log(user1.viewData())  //this is user Niranjan, and useremail is nk@gmail.com

// const ceo = new user ('CEO', 'ceo@gmail.com')
// console.log(ceo.viewData())     //this is user CEO, and useremail is ceo@gmail.com



// Qn 2 in above create an admin that inherits from user and add new method edit data to admin
let data = 'top secret'
class user {
    constructor(name, email){
    this.uName = name
    this.uEmail = email
    }
    viewData(){
        console.log(`Data = ${data}`)  //Data = top secret
        console.log(`this is user ${this.uName}, and useremail is ${this.uEmail}`)//this is user admin, and useremail is ad@gmail.com
    }
}

class admin extends user {
    
    editdata(){
        super.viewData()
        data = 'change is made in data and is encrypted'
        
        console.log(`you are admin and allowed to edit the datas`)//you are admin and allowed to edit the datas
        console.log(`Edited Data : ${data} `)//Edited Data : change is made in data and is encrypt
    }
}

const admin1 = new admin ('admin', 'ad@gmail.com')

console.log(admin1.editdata())