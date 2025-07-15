//%%%%%%%%%%% Async Function %%%%%%%%%%%%%%%%%%%%%%%%
// async function always returns a promisee 
// by adding a async i front of  function we can make normal function a async 
// async function greet (){
//     console.log(`salam rocky bhai`)
// }
// greet()// salam rocky bhai  //returns a promise with state fulfilled but result undefined

//await function is used inside async func , when used await it waits for promise to setteled , stopping all other async func
// function greet (){
//     return new Promise ((resolve, reject)=>{
//     setTimeout(()=>{
//     console.log(`salam bhai, me apka guuu laa m `)
//     resolve(200)
//     }, 2000) 
//  })
// }

// async function greetall() {   //this is Async func
//    await greet()  //this is  await, this wait function to execute first
// }



function user (name){
    return new Promise((resolve, reject)=> {
    setTimeout(()=>{
        console.log('New user here... WELCOME', name);

       resolve('gotch u') 
    //    reject('gotch u') //this is seen in console if this runs  Uncaught (in promise) gotch u  [[PromiseState]]: "rejected"[[PromiseResult]]: "gotch u"
    }, 3000)

})        
}

async function userdetails (){
     await user('niranjan')  //this executes first 

     await user ('Shatya')   //after 3 sec this executes
}


// user('niranjan').then((res)=>{  //we can also apply .then for resolve and .catch for reject 
//   console.log(`promise resolved `, res)
// })