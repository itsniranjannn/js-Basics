let divs = document.getElementsByClassName("box")
let div = 1;
for (d of divs){
    d.textContent = (`this is div no ${div}`)
    div++
}
   