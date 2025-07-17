//TO solve the problem of callback hell we use promise in javascript  
//Promise has three states -pending    -resolve   -reject

// let promise = new Promise ((resolve, reject) => {
//     console.log(`its a promise`)  //this has prototypt Promise status pending and promisesresult undefined
// })

// let promise = new Promise ((resolve, reject) => {
//     console.log(`its a promise`)
// resolve(`promise resolved`)// [[Prototype]]: Promise  [[PromiseState]]: "fulfilled"   [[PromiseResult]]: "promise resolved"
// })

// let promise = new Promise ((resolve, reject) => {
//     console.log(`its a promise`)
//     reject("error occured in promise")//in console this is shown as error  => Uncaught (in promise) error occured in promise
// });



//=====.then(res) And .catch(err) to use Promise=====

// function pro (id){
//     return new Promise((resolve, reject)=>{  //immediately returns a promise
//         setTimeout(()=>{
//             console.log(`this execute after 2 sec|| id =`, id); //this will give output after 2 sec until that  promise state will be pending
//             resolve(`just resolved `)  // and after the output, promise state will be resolved  and result will be //just resolved  
//         }, 2000)
//     })
// }
// pro(1)

// let newpromise = ()=>{
//     return new Promise ((resolve, reject)=>{
//         console.log(`i am promisseeeee`)
//         resolve(`got promise: `)
//     })
// }

// let getpromise = newpromise()//then(res) is use for fulfilled promise after using resolvee
// getpromise.then((res)=>{     //res is the param that is access the resolve(....) function
//    console.log(`resolve send`, res) //resolve send: got promise => got promise pass as (res) from resole ()
// })

// let getpromise = new Promise ((resolve, reject) => {
//     console.log(`i am a promise `)
//     reject(`networked error occurred : `)
// })
// getpromise.catch((err) =>{  //.catch(err) is use for reject promise after using reject 
//    //err is the param that is access the reject (...) function
//     console.log(`reject sends error:`, err)  
//     //output = reject sends error: networked error occured => networked error occured is pass as param (err) from reject()
//  })

//  let prom = new Promise ((resolve, reject )=> {
//     setTimeout(()=>{
//         console.log(`i am batman`)
//         reject(`money error`)
//     }, 2000)
//  })

//  prom.catch((err)=>{
//     console.log(`its an error `, err)
//  })


//>>>>>>>>>>>>>>>>>>>>>>>>>>  Promise chianing  === promise inside promise  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function promise1(){ 
//     return new Promise ((resolve, reject) =>{
//     setTimeout(()=> {
//     console.log(`promise one`)
//     resolve('prob 1 res')
//     }, 3000)
// })
// }

// function promise2(){
//     return new Promise ((resolve, reject)=> {
// setTimeout(()=>{
//             console.log(`promise two`)
//     resolve('prob 2 res')
// }, 3000)
// })
// }

//Technique 1 of promise chaining

// let first = promise1()  //here we declare new var for promise1( ) and promise2()  then applying .then or .catch in those variables
// first.then((res) =>{
//      console.log(res)
// let second =promise2()
//      second.then((res) =>{
//         console.log(res)
//     }) 
// })

// 2nd technique of promise chaining

// promise1().then((res) =>{  //we applied .then ()  here in promise1 function
//      console.log(res)
// promise2().then((res) =>{ //we applied .then ()  here in promise2 function
//         console.log(res)
//     }) 
// })



//           doing promise chaining in the call back hell problem qn

// function user (userid, getNextuser){
//     return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log('Id = ', userid);
//        resolve('gotch u')
//         if(getNextuser){   //this means if getNextuser exists then execute below function 
//             getNextuser()
//         }
//     }, 3000)
// })        
// }// here now we have placed A  getNextuser as a parameter which we will pass  
// =====solution by callback hell
// user(1, () => {    //here arrow function is getnextuser which executes now after 3 sec of user 1
//     console.log('getting id of next user ');
//     user(2 , ()=>{
//         console.log(`getting id of next user`);
//         user(3)
//     });
// });

//          =======Solution by promise chaining===========
// there is function getnewuser called after  we can do this, but its not good and valid 
// here first id 1 will be print, 3s after id 2 then id 3 and 4 in same time cause no func in user (3)
// user(1, ()=>{
//     user(2, ()=>{
//             user(3)
//             user(4)
//         }).then((res)=>{
//             console.log(`res `, res)
//         })
//     }).then((res)=>{
//      console.log(res)
//      console.log(`geting second id`)
//     })





// for promise chaining no need of this get next user

// function user (userid){
//     return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log('Id = ', userid);
//        resolve('gotch u', userid)
//     }, 3000)

// })        
// }

// can use promise chain like this too
//1st technique Nood one
// user(1).then((res)=>{
//     console.log(`getting res`, res)  //user1 at first
//     user(2).then((res)=>{
//      console.log(`getting res`, res)  // user2 after 3 sec = 3000 ms of user1
//      user(3)   //after 3 sec = 3000 ms of user2
//     })
// })

// 2nd like a pro
// user(1).then((res)=>{
//     console.log(`getting res`, res)  //user1 at first
// return user(2)})
//                 .then((res)=>{
//      console.log(`getting res`, res)  // user2 after 3 sec = 3000 ms of user1
//      return user(3)})   //after 3 sec = 3000 ms of user2
//                         .then(()=>{
//                             console.log(`this is promise Chainingggggggggg`);
//                             return user('nTH')
//                         })


//------------------- ASYNC AND AWAIT ------------------
// Async and await is a solution for callback hell and promise chaining 

// function user (userid){
//     return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log('Id = ', userid);
//        resolve('gotch u', userid)
//     }, 3000)
// })        
// }        //using async await gives clean and great code in comparison of using promise chaining and callback hell

//  async function UserId() {  //we crrated a async function
//     console.log(`waiting user1...`)
//     await user(1)  //every time await is called it will wait the promise to settle and then next
// console.log(`waiting user2...`)
//     await user(2)
// console.log(`waiting user3...`)
//     await user(3)
//  }

//  UserId()
