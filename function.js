//---------------------FUNCTION--------------------//
/*function functionname(parameters){
    condition.......................
}
functionname->this is refrence ()-> this is for executing

functionname(arguments)  -> this is full execution of function*/
/*function fullName(){
    let naame = "Niraanjan"
    let caste = "katwal"
   
    return naame + " "+caste;       // here return stops execution and returs the result  when we use return must have console logged 
}
console.log(fullName()) */ //this print the function result after execution


/*function add(x, y){
    console.log("add= ", x + y);
    }// we can get output by this method also 
    add(20, 45)//without return directly calling function */

/*    function invalidname(pass ){
        if(!pass){
            console.log("please have valid name")
        }else{
        return `${pass} you entered shit name`
        }
            }
            console.log(invalidname())
        function heroes (...hero){
         return hero
        }
        console.log(heroes("srk", "rk", "sk", "ak", "cv", "nani", "suriya"))

let x = ()=> {
    let value = 11
       console.log(this)
     }
     x()*/

// ------------ARROW --------
// expilicit return
 /*    const addtwonum = (a,b) => {  // need return if uses curly {}
        return a + b

             }
             console.log(addtwonum(2 , 3))
/implicit return
    const sub = (num1, num2) => (num1 - num2) // no need to use return use small bracket instead 
    console.log(sub(3, 2))*/

// --------------------IIFE-------------------
/*//Normal function 
function city(thau){
console.log(`ma ${thau} ma basxu`)
}
city("kathmandu");// while IIFE make sure to end the fuction using ; semi colon pther next line of code is not executed

//using IIFE  named one
(function curly(value){
    console.log("this is not that" + value)
})(100);

// IIfE as arrow unnamed one
((name) => {
    console.log(`hi my name is ${name}`)

})("shaktiman")*/

// ((a,b) => {
//     console.log('sum = ', a+b)

// })(60, 6)  iffe in arrow function


/*// normal function
const message = ( mes) =>{
    console.log(`this is a message given by " ${mes} "`)
}
message("i wanna wanna wanna dance");
//using iffe
const mess = (( mes) =>{
    console.log(`this is a message given by " ${mes} "`)
})("i wanna wanna wanna dance")

((con)=>{
    console.log(`Sir Niranjan said "${con}"`)
})("I am a small being in this supernova universe");*/


/**(function curly(value){
    console.log("this is not that" + value)
})(100);

function check(val){
    console.log(`this is ${val}`)
}
check(100);

((val)=>{
    console.log(`thus no ${val}`)
    })(100) */

//Qno 1

/*function vowelcount(string){
      let count = 0
    for (let val of string){
        if(val === "a"){
          count++
        }
        
}console.log(count)
}
//using arrow
let alphabet = (string)=>{
let count = 0;
for(let value of string){
    if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
        count++
    }
}
console.log(count)
}
alphabet("apple");*/

//Call back function
//--using for each, this is used to extract each element of an array one by one, this func doesnt returns the value 
/*const array = [111, 233, 545, 435, 674, 909]; //normal
array.forEach( function onebyonearray(value){
    console.log(value)
});
array.forEach((value, index, array)=>{ // arrow
    console.log(value, index, array)
})
const array = [ 1, 2 ,3 , 4 , 5]
array.forEach((value, index, array)=>{ // arrow
    console.log(value, index, array)
})*/ 
//----ForEach is higher order function-----
//fuction which passes other function as a parameter or returns the fuction as output are HIGHER ORDER FUNCTION

//Qno 2
/*const array = [1, 2, 3, 4, 5];
// array.forEach((value)=>{
//     console.log(value * value)
//     })

let newarr = array.map((value)=>{   // map function is used to return output in new array without changing original one
console.log(value / 2)
})

let newwww = array.map(function myf(val){
    console.log(val + val * 2);
})*/
const array = [100, 233, 456,789, 9999, 463, 766];

/*array.filter(function evenfunc(value){    // filter method is used to fiter the data of array based on the condition if true or false
    if(value % 2 == 1){
        console.log("this is odd" + value)
    }
})*/
 
// const finalresult = array.reduce((post, pre)=>{  //this func takes 2 param 
//  return post > pre ? post : pre;
// })
// console.log(finalresult);


// const marks = [98, 78, 99, 79, 87];
// const ninety = marks.filter((value)=>{
//   if(value>90){
//     console.log("this score is " + value)
//   }
// })
// let ninet = marks.map((value)=>{
//  return value > 90
// })
// console.log(ninet)


// function firstName(fname, lname){
//   console.log(`${fname} `)
//   lname('katwal')

// }
// firstName("niranjan", lastName)

// function lastName(lname){
//   console.log(lname)
// }

// let arra = [1,3,6,9];
// console.log(arra.length);

// let sqa = []
// for (let index = 0; index < arra.length; index++) {
//     sqa.push(arra[index]*arra[index])
    
// }
// console.log(sqa)