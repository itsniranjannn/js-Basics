//Qn 1
// const company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
/*console.log("deleted :", company.shift())
console.log(company.splice(1,1, "Ola"))
console.log(company.push("'Amazon"))
console.log(company.slice(1, 3)) */


//////////qn 2
/*let food = "cake";
let guessfood = prompt ("Guess the food ");
 while(food !== guessfood){
    guessfood= prompt("Fuck myan ! you cant guess it ???");
  }
console.log("YOu got it right bro!!!!"); */

////////Qn 3
// let fullName = prompt("Enter your full name");
// fullName = ("@" + fullName + fullName.length);
// console.log(fullName);

///////////Qn 4
/*let marks = [85, 44, 97, 37, 76, 60]
let sum = 0;
for(let i of marks){
 sum = sum + i;
 
}console.log(sum)
let average = sum/marks.length
console.log(average) */

/////////////Qn 5
/*let price = [250, 645, 300, 900, 50]

for(let i=0; i<price.length; i++){
    
    let offer = price[i]/ 10;
      price[i] -= offer;
    
}console.log(price) */

function vowelcount(string){
      let count = 0
    for (let val of string){
        if(val === "a"){
          count++
        }
        
}console.log(count)
}