//-------------------setTimeout-------------------
// setTimeout(()=>{
//     console.log('its async')
// }, 3000)  // here this func will execute just after 3second = 3000 milisecond

// setTimeout((function() {
//     console.log(`localVar`); // Output localVar
// }), 2000); //sice above func is in a settimeoue state, which execute after 2 sec before that below logs will be executed and its a async programming 
// console.log(`i am second`);
// console.log(`i am 3rd`);

//============CallBAck Hell || Pyramid Of Doom==================
// function user (userid){
//     setTimeout(()=>{
//         console.log('Id = ', userid)
//     }, 2000)
// }
// user(1)  // here both of these func will executed at once after 2 second
// user (2)

// but in practical scenario we may want to get the user 1 first and user 2 after a 2s gap 
// function user (userid, getNextuser){
//     setTimeout(()=>{
//         console.log('Id = ', userid);

//         if(getNextuser){   //this means if getNextuser exists then execute below function 
//             getNextuser()
//         }
//     }, 3000);
// }// here now we have placed A  getNextuser as a parameter which we will pass  
// user(1, () => {    //here arrow function is getnextuser which executes now after 3 sec of user 1
//     console.log('getting id of next user ');
//     user(2 , ()=>{
//         console.log(`getting id of next user`);
        
//         user(3)
//     });
// });
/* this callback inside call back is called CALLBACK HELL
Nestead  callback in a stack one inside another is  called Callback hell || Pyramid of doom
user(1, () => {    
    user(2 , ()=>{
        user(3)
    });
})*/