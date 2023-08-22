let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10)

const getAbsoluteDistance = (n1, n2) => Math.abs(n1 - n2)

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  const humDiff = getAbsoluteDistance(humanGuess, secretTarget)
  const compDiff = getAbsoluteDistance(computerGuess, secretTarget)
  if (humDiff <= compDiff) {
    return true
  } else {
    return false
  }
}

const updateScore = (s) => {
  if (s === 'human') {
    humanScore += 1
  } else if (s === 'computer') {
    computerScore +=1
  } else {
    return 'not valid input'
  }
}

const advanceRound = () => currentRoundNumber += 1

// updateScore('human')
// updateScore('computer')
// console.log(humanScore)
// console.log(computerScore)

// advanceRound()
// console.log(currentRoundNumber)
