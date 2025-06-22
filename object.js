//-----------------Object---------------
//------to check that object is empty or not-------
// const obj = {
//     name: "Nranjan",
//     age : 21,
// }
// if(Object.keys(obj).length === 0){
//     console.log("Nthg inside obj");
    
// }else{
//     console.log("there is somethig plz check")


// technique to access the values of object
const obj = {
    name: "Niranjan",
    age : 21,
    
}
console.log(obj.hasOwnProperty("name"))
console.log(obj.name)

console.log(obj["name"])
console.log(typeof obj["age"])
Object.freeze(obj)//this is used when we dont want any changes on the object
obj.name= "niranjan"
console.log(obj["name"])