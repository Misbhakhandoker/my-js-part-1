// nasted ifelse

// winning number 19

// 19 your guess is right
// 17 too low 
// 20 too high

let winningNumber = 19;
let userGuess = +prompt("Guess a number");
// 12
// console.log(typeof userGuess, userGuess);
if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too low!!!");
    }else{
        console.log("too high!!");
    }
}