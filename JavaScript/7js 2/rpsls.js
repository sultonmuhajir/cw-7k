/*
|--------------------------------------------------------------------------
| Rock Paper Scissors Lizard Spock
|--------------------------------------------------------------------------
|
*/

function rpsls(pl1, pl2) {
   if (pl1 == pl2) return "Draw!";
   let x = {
      scissors: ["lizard", "paper"],
      paper: ["rock", "spock"],
      rock: ["lizard", "scissors"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
   };
   return x[pl1].includes(pl2) ? "Player 1 Won!" : "Player 2 Won!";
}


function rpsls(pl1, pl2) {
   const moves = ["scissors", "paper", "rock", "lizard", "spock"];
   const winner = (5 + moves.indexOf(pl2) - moves.indexOf(pl1)) % 5;
   return winner ? `Player ${winner % 2 ? 1 : 2} Won!` : "Draw!";
}


function rpsls(pl1, pl2) {
   if (pl1 == pl2) return "Draw!";
   let x = {
      scissors: ["paper", "lizard"],
      paper: ["rock", "spock"],
      rock: ["scissors", "lizard"],
      lizard: ["spock", "paper"],
      spock: ["scissors", "rock"],
   };
   if (x[pl1].indexOf(pl2) != -1) {
      return "Player 1 Won!";
   } else {
      return "Player 2 Won!";
   }
}


console.log(rpsls("rock", "lizard"), "Player 1 Won!");
console.log(rpsls("paper", "rock"), "Player 1 Won!");
console.log(rpsls("scissors", "lizard"), "Player 1 Won!");
console.log(rpsls("lizard", "paper"), "Player 1 Won!");
console.log(rpsls("spock", "rock"), "Player 1 Won!");
console.log(rpsls("lizard", "scissors"), "Player 2 Won!");
console.log(rpsls("spock", "lizard"), "Player 2 Won!");
console.log(rpsls("paper", "lizard"), "Player 2 Won!");
console.log(rpsls("scissors", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "spock"), "Player 2 Won!");
console.log(rpsls("rock", "rock"), "Draw!");
console.log(rpsls("spock", "spock"), "Draw!");