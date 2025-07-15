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





//==== IIFE IN ASYNC =====
// IIFE is a immediately invoked function // noo need of function  name and no need dto execute the function again
// -- IIFE are not reusable
// (function(){  //>>normal IIFE
//      console.log(`hooo hooo  IIFE hoo`)   //no need to execute
// })();

// (()=>{    //>>>> Arrow function
// console.log(`yo pani IIFE NAI ho tara Arrow function ma`)
// })()


// IIFE EXAMPLE IN ABOVE ASYNC AWAIT EXAMPLE
// function user (name){
//     return new Promise((resolve, reject)=> {
//     setTimeout(()=>{
//         console.log('New user here... WELCOME', name);
//        resolve('gotch u') 
//     }, 4000)

// })        
// }
//this is normal async func 
// async function userdetails (){
//      await user('niranjan')  
//      await user ('Shatya')   
// }

//aplying normal IFFE 
(async function (){  //removed name userdetails fron func 
     await user('niranjan')  //New user here... WELCOME niranjan
     await user ('Shatya')   //New user here... WELCOME Shatya  after 4 sec of above 
})();

//applying IFFE Arow Function
(async()=>{ // removed the function also after async 
     await user('niranjan')  
     await user ('Shatya')   
})();
