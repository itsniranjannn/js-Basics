//   ====   Somethiing new About Array   ====   //
//Arraya are either  - continious (packed)    - Holeyyyy

//SMI = Small Integer
//Packed Integr
//Double Integer


const array = [1, 2, 3, 4, 5]
//This is Packed Smi

array.push(6.0)
// console.log(array)  //[ 1, 2, 3, 4, 5, 6 ] Now this is Packed Double Integer

array.push('7')
// console.log(array);  //[ 1, 2, 3, 4, 5, 6, '7']  this is Packed integer

// Once a array is change it cant be reversed like if SMI is change to Double Integer It cant be reversed to SMI


/// HOLEY Array

array[10] = 10    // now this  created a hole inside array, between 7 & 10 there willbe empty space
console.log(array) //[ 1, 2, 3, 4, 5, 6, '7', <3 empty items>, 10 ]
console.log(array[8])  // get undefined cause there is empty in 8 and 9
console.log(array.length);// 11
console.log(array.hasOwnProperty(array, 9)); // returns false
console.log(array.hasOwnProperty(Object.prototype, 9)); //false
console.log(array.hasOwnProperty(array.prototype, 9)); // returns false


//Most expensive check in js
//Holes are expensive == there must not be holes in js
// bound check
// hasOwnProperty(array, 9)
// hasOwnProperty(array.prototype, 9)
// hasOwnProperty(Object.prototype, 9)

// console.log(array[15]); //same as above there is empty space  Out of bound


//grade in array
// once dowgraded cant upgrade
// SMI > DOuble > Packed
// holeySmi > HoleyDouble> HoleyPacked

const arr1 = new Array(3) // this  create holey array
arr1[0] = '0'
arr1[1] = '1'
arr1[2] = '2'
console.log(arr1);


// creating like this makes packed
const arr2 = []  // we declared empty array now we can push inside this as much as we want
arr2.push('0')
arr2.push('1')
arr2.push('2')
arr1[2] = '2'
console.log(arr2);