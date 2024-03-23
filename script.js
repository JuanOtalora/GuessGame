let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return Math.floor((Math.random() * 9) + 1)
}

const compareGuesses = (humanGuess, computerGuess, secretGuess) =>{
    let differenceC = Math.abs(secretGuess - computerGuess);
    let differenceH = Math.abs(secretGuess - humanGuess);
    if(differenceC === differenceH){
        return true;
    }else if(differenceH > differenceC){
        return false
    }
    return true;

}

const updateScore = winner =>{
    if(winner === "human"){
        humanScore++;
    }else{
        computerScore++;
    }
}

const advanceRound = ()=>{
    currentRoundNumber++;
}