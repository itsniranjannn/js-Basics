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