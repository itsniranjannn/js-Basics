//connditional
// let id = 20
// if(id<15){
//     console.log("you are bright");
//     }else{
//         console.log("you are fucking stupid")
//     }

// let mode="BLOOM"
// let color;
// if (mode=="BLOOM"){
//   color= "pink";
// }else{
//     color= "black";

// }
// console.log(color)



// let hello = "Hello";
// hello += " world";
// console.log(hello);

// a= null
// console.log(typeof null)

// const product ={
//     fullName:"Magic pen",
//     rating: 4,
//     isdealoftheday: true,
//     offer: "10%",
//     price: 140,
// }
// console.log(product)


// let fullName = "Niranjan"
// console.log(fullName.split())
// console.log(typeof fullName)

// const profile ={
//     Name:"Shraddha",
//     isfollow:false,
//     ismessage: true,
//     posts: 192,
//     followers: 521,
//     fullname:"Shraddha Khapra",
//     description:"enterpreneur|tech enthusiast| Google sps 20",
// };
// console.log(typeof profile.Name)

//     #uniary operator
/*let a = 100
b = 22
a++
console.log("a++ ==")
++a
console.log("++a=", ++a)
console.log("a =", a)
mod = a%b
console.log(mod)
console.log("sum =", a + b);
++a
console.log(a)
console.log(a)*/
// for(let i=1; i<= 100; i++){
//   if (i % 2 == 0){
//     console.log("these are even =", i)
//   }
// }
// let i = 1;
// while(i<=5){
//   console.log("this is natural number" );
//   i++;
// }
// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num);
  
// }
let name = "Niranjann    "
let caste = "    Katwal   nnn  "
// console.log(caste.trimStart())   to trim spaces at front 
// console.log(caste.trimStart())   trim space at end
// console.log(caste.trim()) trim spaces from sentence extra
// console.log(caste.substring(1,5)) same as slice but specify index of word
// console.log(caste.slice(2, -2)) to extract desired word by index
// console.log(name.replace("Niranjan", "Niran")); replacing the word
// console.log(name.length); to get length
// console.log(name.toUpperCase()); in uppercase
// console.log(caste.toLocaleLowerCase()); in lowercase
// console.log(caste.charAt(3)); to fetch word from indexes
// console.log(name.concat(" "+ caste.concat(name))) to concat the string
// console.log(name.repeat(5)); to repeat a string
// console.log(name.split()) makes a string into array
let txt = "I can eat bananas all day all along";
// let x = txt.slice(10,-8);
// console.log(x)
// console.log(txt.indexOf("all")) //output: 18  to find first occurance of all
//console.log(txt.lastIndexOf("all"))// output: 26  to find last occurance of all
// console.log(txt.includes("I")); it gives true if include false if doesnt
// console.log(txt.search("c")); search the word in String
// console.log(txt.match("day"))   matches the value in string 


let x = 100.60;
console.log(Math.floor(x))   //returns the value of x rounded down to its nearest integer: 100
console.log(Math.ceil(x))  // returns the value of x rounded up to its nearest integer:101
console.log(Math.trunc(x)) // removes part of decimal and give int only 100
console.log(Math.sign(x)) //it return 1 for +ve, -1 for -ve, and 0 for 0      ans-> 1
console.log(Math.pow(8, 2))   //pow uses y as power of x here 8^2 = 64
//console.log(x.toPrecision(9))
//console.log(x.toFixed(3));
// console.log(x.toString())
console.log(typeof x)
