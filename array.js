 //--------------------# ARRAYS---------------------


//-----to check the array is empty or not----
// const arr = [ 1, 2 ];
// if(arr.length === 0){
//     console.log("empty array")
// }
// else{
// console.log("array is filled ")
// console.log(arr.length)
// }



 const marks = [100, 93, 99, 91, 96, 98, 97, 94];
//  console.log(marks.includes(100))
console.log(marks)

  let sum = marks.reduce(myfunc)     // The reduce() method runs a function on each array element to produce a single value.
 function myfunc (a , b){
     return a + b
 } 
 console.log('the sum is =' + sum)


 /*const mm = marks.map(myfunct)   // map is used to map array and create new array
 function myfunct(value, array , index){
     return value * 2
 }
 console.log(mm)

 const x = [45, 4, 9, 16, 25];
let y = x.map(myfunc);
function myfunc(val) {
  return val + 20;
}
console.log(y)*/

//  console.log(marks.with(2, 95)) // with()  method can be used to replace by giving index , value like 2 index and 95 value
 /* let rest;  // rest(...) is used to rest the array values by one by one if use a then single &  if a , b 2 values will be deleted
 const arrayrest = ["hayato", "maxim", "alvaro", "alok", "k"]; //if used a, b, c, ...rest then up to 3  
 [a, b, ...rest] = arrayrest;
 console.log(rest);*/

/* let num = Math.min(...marks)//to find min number among datas
let num = Math.max(...marks)     //to find max number among datas
console.log(num)
 const  M = marks.keys()  // to get index position of data 
 for(let x of M){
     console.log(x)
 }
 const  M = marks.entries()  // to get entries of data 
 for(let x of M){
     console.log(x)
 }*/

/* const myarray = Array.from("NiranjaN")   //   form meth0d creates an new array from string
 console.log(myarray)*/
/* let someover = marks.some(function(value){     // some checks that some of the index values pass the condition or not 
     return value > 95;
 })
 console.log(someover)
 let allOver90= marks.every(myFunction);   // this checks that every values passes the condition or not if yes gives true then false
 function myFunction(value) {
   return value > 90;
 }
 console.log(allOver90)*/

 /* let sum = marks.reduce(myfunc)     // The reduce() method runs a function on each array element to produce a single value.
 function myfunc (a , b){
     return a + b
 } 
 console.log('the sum is =' + sum)
 const nm = marks.filter(myfunc)   //this is used to filter the values of array based on condition
 function myfunc(value){
     return  value > 98
 }*/
/* console.log(nm)
console.log(marks.unshift(200)) //same as push but add data in first [200, 100, 93, 99, 91, 96, 98, 97, 94];
console.log(marks.shift()) //same as pop but delete from first    [93, 99, 91, 96, 98, 97, 94];
console.log(marks) 
 console.log(marks.sort()) //it sorts neumerically like 1 2 3 ... here 100 then all have 9 so checks 2nd digit 91 93 94 . . . . .
 to sort descending order
 console.log(marks.sort(function(x, y){return (y-x)}))
   ### OR
 const descmarks = marks.sort(descending);
 function descending(a,b){
     return (b-a);
 }
 console.log(descmarks) */

 // ####to sort numbers ascending order
/*1st technique  
 console.log(marks.sort(function(a,b){return(a-b)}))  
2nd technique
 let managedmarks = marks.sort(myfunction)      
 function myfunction(a,b){
     return (a-b);
 }
console.log(managedmarks)           //output [  91, 93, 94, 96, 97, 98, 99, 100 ]


let value = managedmarks.find(mark)   //   find first value that pass the condition       91
let value = marks.findLast(mark)    // find first value that pass the condition           94
let value = marks.findIndex(mark)    // find first position index that pass the condition 0 position
let value = marks.findLastIndex(mark)  //   find first value that pass the condition      2 position
 function mark(value, index, array){
     return value < 95
 } 
 console.log(value)
 console.log(marks.sort(function(a, b){
     return(a-b);
 })) sorts numbers in ascending 
 */
// const sub= ["math", "english", "gk", "science"]
// console.log(sub.join(" "))  //join is used to join values of array as string inside() we can have any thing we want to join array lie +, " ", and etc
/*const sub= ["math", "english", "gk", "science"]
 console.log("array =", ...marks, ...sub)    //spreading array

console.log(sub.sort()) // arrange in alphabetical order  
 const newarray = sub.toSorted(); //can use ToSorted to sort alphabetically & assign new array 
 console.log(newarray)
console.log(sub.reverse()) //  reverse the array and these change main array 
const subj = sub.toReversed() //here it  make changes in new array Subj not in sub
 console.log(subj)    //output ['science', 'gk', 'english', 'math' ]
 console.log(sub)    // output ['math', 'english', 'gk', 'science' ]
 const mark=  marks.splice(2,4,100,1001);
 console.log(mark) */



// console.log(sub.at(3))
//  console.log(marks.concat(sub))
//  console.log(marks.toSpliced())
//  arr = marks.splice(1,4)
//  console.log(marks)
//  console.log(arr)
//  console.log("A = ", marks)
//  const mynew1 = marks.slice(2, 5);  //this extract the index values dont change existing array
//  console.log(marks)
//  console.log("slice= ", mynew1)

/* const array2 = marks.splice(2, 4) //this extract the index values and change the existing array also
 console.log(marks)
 console.log("Splice= ", array2)
 marks.unshift(90)  //Adds a new element at the beginning of an array
 marks.shift()   //Removes the first array element
 marks.pop()
marks.push(101) ; //to add in array
 console.log(marks.join())  // to convert into string also can use to.String


[100, 93, 99, 91, 96, 98, 97]
///to delete
 marks.splice(2,4)    output[100, 93, 97] //this deletes the 4 elements from the 2nd indexes 99 to 98 
///to add 
 marks.splice(2,0, 100, 99, 12)   //output [100, 93, 100, 99, 12, 99, 91, 96, 98, 97] 
 ///it add 100 99 12 just before 2nd index 
///to replace
 marks.splice(2,3,111,200,300)  //       output   [100, 93, 111, 200, 300, 98, 97]
 ///it replaced index 2 - 99, 3- 91 ,4- 96 and added respective values 111, 200, 300 */

// #### Sorting Object
/* const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

console.log(cars.sort(function (a,b){return(a.year - b.year)}))

const sortedobj = cars.toSorted(function (a,b){return(a.year - b.year)})
console.log(sortedobj)
*/
//marks[1] = 2
 //console.log(marks)

 
 //rest to check sum og array
//  function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x)