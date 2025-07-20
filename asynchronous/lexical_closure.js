// ~~~~~~~~~~~~~~~~~~~~~~~ LEXICAL SCOPING IN JS ~~~~~~~~~~~~~~~~~~~~~~//
//Child function can access the variable declared in its parent function
//Parent function cant access the variable declared in its any child function
//Neither the siblings functions can have acess to each other variable declared

function outer(){
    let name = 'Niranjan'

    function innerOne (){
        let address = 'kathmandu'
        // console.log(address);
        // console.log(name)// Niranjan  ===   since its a child function can access its parent block functions variable   ===  Niranjan
        // console.log(study) // returns error ReferenceError: study is not defined ===> cause siblings cant access each other variables declared
    }
    innerOne()

    function inner2 (){
        let study = 'bca'
        // console.log(study)
        //  console.log(name)// Niranjan  ===  since its a child function can access its parent block functions variable    
        // console.log(address) // returns error ReferenceError: study is not defined ===> cause siblings cant access each other variables declared

    }
    inner2()
}
outer()
// console.log(name)  //returns error ReferenceError: name is not defined 
// console.log(address)   // cause cant acess the var declared in func outside its block

 //----------------CLosure in js-------------//
function mystery(){
    let shock = 'man with 3rd eye'

    function god(){
        let name = 'shiv'
        console.log(`${name} is ${shock}`)  //can access parent function variables

    }
    return god;  //when used this return here it gives the lexical 
}

const newMystery = mystery()
newMystery()