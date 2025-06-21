//---------falsy values------------
//false, 0, -0,0n, null, NaN, undefined,""
//--------Truthy Values------------
//All other than falsy are truthy but som suprising ones are ----
//"0", "false", " " something inside String     , {}, [], function(){}


// let i = 0;
// while(i<=100){
//   if (i%2!==0){
//   console.log("this is odd number", i );
  
// }
// else{
//   console.log("this is even number ", i)
// }i++;
// }
// for(let i=1; i<= 100; i++){
//   if (i % 2 == 0){
//     console.log("these are even =", i)
//   } else {
//   console.log("These are odd =",i)
//   }
// }
// let value = "A"

// console.log(value.charCodeAt(0));

// let x = "1" + "nir";
// console.log(x)

// let add = fun(45,67);
// function fun(a,b){
//  return a + b;
// }
// alert (add)

// const Sentence = "Learning is fun.";

// console.log("Here are exampl \t es of finding the \v positions\nof substrings in the sentence.");

// console.log(learningIsFunSentence.indexOf("."));

 // console.log(Sentence.includes("is"))
// let newsentence = Sentence.replace("is", 1)
 // console.log(Sentence.slice(7 , 9))
// console.log(newsentence)
// console.log(100e3)
// const fortune1 = "Your cat will look very cuddly today.";
// const fortune2 = "The weather will be nice tomorrow.";
// const fortune3 = "Be cautious of your new neighbours.";
// const fortune4 = "You will find a new hobby soon.";
// const fortune5 = "It would be wise to avoid the color red today.";

// Select a random number between 1 and 5
// const randomNumber = Math.floor(Math.random() * 5) + 1;

// Assign the selected fortune to the selectedFortune variable
// let selectedFortune;
// if (randomNumber === 1) {
//   selectedFortune = fortune1;
// } else if (randomNumber === 2) {
//   selectedFortune = fortune2;
// } else if (randomNumber === 3) {
//   selectedFortune = fortune3;
// } else if (randomNumber === 4) {
//   selectedFortune = fortune4;
// } else if (randomNumber === 5) {
//   selectedFortune = fortune5;
// }

// // Log the selected fortune to the console
// console.log(selectedFortune);
// let a = prompt("enter your number:");
// if(a % 5==0){
//     console.log("its a multiple");
// }else{
//         console.log("its fucking not multiple");
//     }
// let grade= prompt("please give a grade to : ");
// if(grade>=41 && grade<=50){
//     console.log("you got C");
//     }else if(grade>=51 && grade<=60 ){
//     console.log("you got C+");
// }else if(grade>=61 && grade<=70){
//     console.log("you got B")
// }else if(grade>=71 && grade<=80){
//     console.log("you got B+")
// }else if(grade>=81 && grade<=90){
//     console.log("you got A")
// }else if(grade>=91 && grade<=100){
//     console.log("you got A+")
// }else{
//         console.log("You are failed")
// }
// let num = 2;
// switch(num){
//     case 1:
//        alert("this is 1")
//         break;
//     case 2:
//         alert("this is two")
//     }
//     console.log(num)
// const time = 2;
// let greeting 
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// alert(greeting);
// const nam= 2
// switch(nam){
//     case 1:
//         console.log("its N");
//         break;
//     case 2:
//         console.log("its not N")
// break;
// default:
// }


//null coalescing
let value;
value = null ?? 2
console.log(value)
value = undefined ?? 2
console.log(value)


//ternary operator
const val = 200
val <= 201 ? console.log("this is less") : console.log("this is more")


let values = 19
values <= 20 ? console.log("this is less") : console.log("this is more")