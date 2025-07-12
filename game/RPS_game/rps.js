let userpoints = 0;
let compoints = 0;
const msg = document.querySelector(".result")
const userScore= document.querySelector('.userPoint')
const compScore = document.querySelector('.comPoint')
const restart = document.querySelector('button')

const choices = document.querySelectorAll('.choice')
choices.forEach((choice)=>{
   choice.addEventListener('click', ()=>{
    userchoice = choice.getAttribute('Id')
    playGame(userchoice)
 
   })
})


let genCompChoice =()=>{
  const option = ["Rock", "Paper", "Scissor"];
  const randchoice = Math.floor(Math.random() * 3)
  return option[randchoice];
}

let playGame = ( userchoice) =>{
 const compChoice = genCompChoice()

  if( userchoice == compChoice ){
    draw();
   }else{
    let userWin = true;
    if (userchoice === "Rock") {
      userWin = compChoice === "Paper" ? false : true;
    } else if (userchoice === "Paper") {
      userWin = compChoice === "Scissor" ? false : true;
    } else {
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userchoice, compChoice);
  }

}


const showWinner =function (userWin, userchoice, compChoice){
        if(userWin){
          userpoints++;
          displayMessage(` You Won || Your choice ${userchoice} beats AI's ${compChoice} `)
          msg.style.backgroundColor = '#82204A'
          userScore.innerHTML = userpoints
        }else{
          compoints++;
          displayMessage(` You Loose || Bot's choice ${compChoice} beats Your choice ${userchoice} `)
          msg.style.backgroundColor = '#E8DB7D'
          compScore.innerHTML = compoints
        }
      }

const draw = ()=>{
  displayMessage(`Game is Tie, Choose  Again`)
  msg.style.backgroundColor = "#333";
 
}


function displayMessage(message){
    msg.innerHTML =  `${message}`
    };

restart.addEventListener('click', function(){
  userpoints = 0;
  compoints = 0;
  genCompChoice();
  userScore.innerHTML = '0'
  compScore.innerHTML ='0'
  msg.innerHTML ='New Game Just Started || Dont Loose Now !!!';
  msg.style.backgroundColor = '#462255'
})