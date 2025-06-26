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


//  const map = new Map()  //set inserts key and values to map
//  map.set("thomas" , "neo")
//  map.set("tiffany","Trinity")
//  map.set("mat", "rix")
//  console.log(map)
//  for ([k, v] of map){
//     console.log(k , ":", v)
//  }


 const arr = new Array(1, 2, 3, 4, 5,6 )

 for (values in arr){
    console.log(arr[values])
 }


 const myObj = {
    thomas : "neo",
    tiff : "trinity",
}
for (value in myObj){
    console.log(`${value} equals to ${myObj[value]}`)
}
