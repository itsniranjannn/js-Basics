let buttons = document.querySelectorAll('.button')
let reset = document.querySelector('.reset')
let mes = document.querySelector('#message')

let playGame = true;
let count = 0
let turnA = true;
const wining_trio = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]]

if(playGame){
mes.innerHTML= `In Game Messages Appear Here...`

buttons.forEach((gameButton) => {
  gameButton.addEventListener("click", () => {

     if (!playGame || gameButton.innerText !== '') return;

  if(turnA === true){
    gameButton.innerHTML = 'O'
    turnA = false
  }else{
    gameButton.innerHTML = 'X'
    turnA = true
  }
  gameButton.disabled = true
  gameButton.style.cursor = 'not-allowed'

    count++;
 let isWinner = checkwhostheWinner();
 if (count === 9 && !isWinner) {
    tie();
    playGame= false
    }
  });
});
}

const checkwhostheWinner =() => {
  for ( let trio of wining_trio){
    const [a , b , c]= trio
  let first = buttons[a].innerText
  let second = buttons[b].innerText
  let third = buttons[c].innerText

  if(first !== '' && second !== '' && third !== ''){
      if(first== second && second == third){  
        buttons[a].style.backgroundColor = 'black'
        buttons[b].style.backgroundColor = 'black'
        buttons[c].style.backgroundColor = 'black'
         buttons[a].style.color = 'white'
         buttons[b].style.color = 'white'
         buttons[c].style.color = 'white'

        
        displayMessage(`  ${first} is Winner, Raja Ho Raja`)
        btndisabled();
         playGame = false;
         return true;
        } 
    }
  }return false;
};

const btndisabled = ()=>{
    for (let btn of buttons){
        btn.disabled = true;
        btn.style.cursor = "not-allowed";
        
    }
}
const btnenabled =()=>{
    for(btn of buttons){
        btn.disabled = false;
        btn.innerText = "";
        btn.style.cursor ="pointer"
        btn.style.backgroundColor = ''
    }
}

reset.addEventListener('click', function() {
  playGame = true
  count = 0
turnA = true;
btnenabled();
displayMessage(`New Game Has Begun`)
 });



const tie = function(){
displayMessage(`Thukka NooooB haru Alo cross ni jitdainau || Xya Xya Xya`);
};

function displayMessage(message){
    mes.innerHTML =  `${message}`
    };

