// console.log(Math.PI)  //3.141592653589793

Math.PI =  5
// console.log(Math.PI);//3.141592653589793   ====>    isnt changed from above initialization

//to check the property of the object we use this Object.getOwnPropertyDescriptor

const description = Object.getOwnPropertyDescriptor(Math, "PI") 
// console.log(description);
// output we get here
//                  {
//                  value: 3.141592653589793,
//                  writable: false,
//                  enumerable: false,
//                  configurable: false
//                  }


// lets create another Objectand check the property of that

let learn = {
    skill : 'javascriprt',
    timePeriod :"2 months"
}

// console.log(`this is my learning period ${learn.timePeriod} and i am learning this ${learn.skill}`)

// let des = Object.getOwnPropertyDescriptor(learn, "skill")
// console.log(des);
                // output
                // {
                //   value: 'javascriprt',
                //   writable: true,
                //   enumerable: true,
                //   configurable: true
                // }



Object.defineProperty(learn, "skill", {
    writable: false,
    enumerable: false
})


let des = Object.getOwnPropertyDescriptor(learn, "skill")
console.log(des);

for([key, value] of Object.entries(learn)){
    console.log(`${key} : ${value}` )
}

