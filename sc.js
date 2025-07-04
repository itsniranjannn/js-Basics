let divs = document.getElementsByClassName("box")
let div = 1;
for (d of divs){
    d.textContent = (`this is div no ${div}`)
    div++
}


let list = document.querySelectorAll("li")
// console.log(list);
list.forEach((val)=>{
    val.style.color='blue'
  
})
  let ind = 1;
    for (l of list) {
        l.innerText = l.innerText +" "+ `this is li no ${ind}`
    }
  ind++  

  let lisss = document.getElementsByClassName('lis')

  const myconv = Array.from(lisss)

myconv.forEach((newlist)=>{
    newlist.style.backgroundColor = 'grey'
    newlist.style.fontSize = '30px'
})


