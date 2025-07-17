 /*for (let x = 0; x<= 4; x+=1){   //for loop
  console.log(x)
 }
 let x = 3 //initialization
 while(x<=5){//condition         //while
  console.log("from " + x)//statement
  x +=1 //increment
 }
 do{                                //do while
   console.log(x)//statement
  x++;//increment
 }while(x<=4)//condition */ 



//  let x = "Niranjan";
//  for(val of x){   //for of loop
//     console.log(val)
//  }

//  let a = "niranjan"
//  for(val in a){
//     console.log(val)
//  }

//-----use for in for object-----for of on array--------//

/* const map = new Map()  //set inserts key and values to map
 map.set("thomas" , "neo")
 map.set("tiffany","Trinity")
 map.set("mat", "rix")
 console.log(map)

 for ([k, v] of map){
    console.log(k , ":", v)
 }
///  for(let key in map){ //map are not iterable so not possible to use this for in
///    console.log(key)
///  }*/


/*const arr = new Array(11, 22, 43, 64, 775, 96 )
for (const val of arr){
    console.log(val)
}

for (const v in arr){// output 0 1 2 3 4 5 For in in array gives only index position
    console.log(v)
}

 for (values in arr){
    console.log(arr[values])//need to place in [] the keys to get exact array keys
 }//output 11 22 43 64 775 96  */


//  const myObj = {
//     thomas : "neo",
//     tiff : "trinity",
// }
// for (value in myObj){
//     console.log(`${value} equals to ${myObj[value]}`)
// }


//--------FOR EACH --------//
// const cities =[
//     {
//         cty : "kathmandu",
//        province: 3,
        
//     },
//     {
//          cty : "pokhara",
//           province: 5,
//     },
//     {
//         cty : "chitwan",
//          province: 5,
//     }
// ]

// cities.forEach((city)=>{
// console.log(city.province ==3)
// })
// cities.forEach((city)=>{
// console.log(city.cty)
// })

// const country = ["Nepal", "UK", "USA", "Denmark"]
// country.forEach( (city, ind, arr) => {
//     console.log(city, ind, arr);  // it hold index and array 
    
// })
// const cname = country.forEach( (city) => {   //for each does not returns anything if returned we get undefined 
//     return city    

// })
// console.log(cname);


//~~~~~~~~Filter~~~~~~~~~~//
// const ages = [32, 33, 16, 40];
// let newage = ages.filter((n)=>{
// return n> 18
// })
// console.log(newage);


// const country = ["Nepal", "UK", "USA", "Denmark"]
// const  newcon = country.filter((con)=> {
//     return  con 
// })
// console.log(newcon)


// const cities =[
//     {
//         cty : "kathmandu", province: 3, popn: 1000000,
        
//     },
//     {
//          cty : "pokhara",   province: 5, popn : 500000,
//     },
//     {
//         cty : "chitwan", province: 4, popn: 300_000,
//     }
// ]
// cities.forEach((city)=>{
// console.log(city.popn)
// })


// const refinedcity = cities.filter((city)=> city.province ==5 && city.popn > 300000)
// console.log(refinedcity)




//========REDUCE()============//
// const myarray =[1, 2, 3]
// const newarray = myarray.reduce((pos, pre)=> pos > pre ? pos : pre )
// console.log(newarray)

// const shoppingCart = [
//     {
//         itemname : "chocolate",
//         price : 20,
//     },
//     {
//         itemname : "juice",
//         price : 70,
//     },
//     {
//         itemname : "snacks",
//         price : 50,
//     }
// ]
// const p2p = shoppingCart.reduce((pos , items)=> pos + items.price , 0)
// console.log(p2p);  //here reduce is used to get sum of price from object

// const arr = [1, 2, 3, 4]
// let y = [];
// for (let i = 0; i < arr.length; i++) {
//  y.push(arr[i] ** arr[i]);
// }
// console.log(y)
// for (x of arr){
//  console.log("x=", x**2)
// }

const color ={
  pri : 'blu',
  sec : 'red'
}
for (i in color){
  console.log(color[i])
}
for(let i = 10; i >= 10 ; i--){
 console.log(i);
}