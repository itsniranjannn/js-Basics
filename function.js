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
//implicit return
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

//Qno 1
let alphabet = (string)=>{
let count = 0;
for(let value of string){
    if(value == "a" || value == "e" || value == "i" || value == "o" || value == "u"){
        count++
    }
}
console.log(count)
}
alphabet("apple");