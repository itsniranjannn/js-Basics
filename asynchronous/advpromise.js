//=== Creating a promise ===//

// const prom1 =new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error= false
//      if(!error){
//        resolve('prob is resolved')
//      }else{
//         reject('error detected')
//      }
//     }, 1000)
// })

// prom1.then((res)=>{
//    console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })

//-------- --- Promise Chaining --- --------//
// const promise =new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error=true
//      if(!error){
//        resolve({
//         username: 'Niranjan',
//         email : 'n@ex.com'
//        })
//      }else{
//         reject('error detected')
//      }
//     }, 1000)
// })

// promise.then((user)=>{  //this blockexecutes when error is  false   //  here i take the resolve via .then
//    console.log(user);  //i get whole object pass from resolve { username: 'Niranjan', email: 'n@ex.com' }  
   
//    return(user.email)// to access specific we return the desired obj key like this then perform chaining
// }).then(function(email) { //passed user.email from above but in parameter we place only key not object name
//     console.log(email)
// })
// .catch((err)=>{     //here we use catch() for reject  //thid block executes when error is true                                                                                                   
//     console.log(err);
    
// }).finally(()=> console.log('either rejcetd or resolved')) //this will execte any time either promise is resolved or rejected



//----------- Async Await ------------//

// const vacha =new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         let error= false
//      if(!error){
//        resolve({
//         subject: 'Network',
//         tutor : 'Niranjan'
//        })
//      }else{
//         reject('JS error detected')
//      }
//     }, 2000)
// })

// async function prom() {
//    try{
//     const response = await vacha
//     console.log(response)
//    }catch(error){
//     console.log(error)
//    }
// }
// prom()

//  function fun (user){
// return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('hello', user)

//         let error = true
//         if(!error){
//         reject('errorrrrrr')
//         }else{
//         resolve('is resolved')
//         }
//     }, 2000)
// })
// }

// (async () => {
    
// try{
//     const response = await fun('niranjann')
//     console.log(response)
// }catch(errror){
//   console.log(errror)
// }

// })()