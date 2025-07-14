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

let getpromise = new Promise ((resolve, reject) => {
    console.log(`i am a promise `)
    reject(`networked error occurred : `)
})
getpromise.catch((err) =>{  //.catch(err) is use for reject promise after using reject 
   //err is the param that is access the reject (...) function
    console.log(`reject sends error:`, err)  
    //output = reject sends error: networked error occured => networked error occured is pass as param (err) from reject()
 })