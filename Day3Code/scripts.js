// Code For Rock Paper Scissors App
let buttons = document.querySelectorAll('button')
const gameOptions = ['rock', 'paper', 'scissors']
let youChoseH1 = document.getElementById('you-chose')
let botChoseH1 = document.getElementById('bot-chose')
// Function to handle the stuff happening on the screen
function changeScreen(youChose, botChose, playerWon) {
  youChoseH1.innerText = `You Chose: ${youChose}`
  botChoseH1.innerText = `Your Oponnent Chose: ${botChose}`

  if (playerWon === 'win') {
    let newMessage = document.createElement('h1')
    newMessage.innerText = "You won!"
    document.body.appendChild(newMessage)
  } else if (playerWon === 'lose') {
    let newMessage = document.createElement('h1')
    newMessage.innerText = "You lose!"
    document.body.appendChild(newMessage)
  } else {
    let newMessage = document.createElement('h1')
    newMessage.innerText = "You tied!"
    document.body.appendChild(newMessage)
  }
}

function shoot(userChoice) {
  let botChoice = gameOptions[Math.floor(Math.random() * 3)]
  if (userChoice === botChoice) {
    // We have a tie
    changeScreen(userChoice, botChoice, 'tie')
  } else if (userChoice === 'rock') {
    if (botChoice === 'paper') {
      // We lose
      changeScreen(userChoice, botChoice, 'lose')
    } else {
      // Bot chose scissors, we win
      changeScreen(userChoice, botChoice, 'win')
    }

  } else if (userChoice === 'paper') {
    if (botChoice === 'rock') {
      // We win
      changeScreen(userChoice, botChoice, 'win')
    } else {
      // Bot chose scissors, we lose
      changeScreen(userChoice, botChoice, 'lose')
    }

  } else if (userChoice === 'scissors') {
    if (botChoice == 'rock') {
      // We lose
      changeScreen(userChoice, botChoice, 'lose')
    } else {
      // We win, bot chose paper
      changeScreen(userChoice, botChoice, 'win')

    }
  }

}
