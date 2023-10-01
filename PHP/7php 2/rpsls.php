<?php
/*
|--------------------------------------------------------------------------
| Rock Paper Scissors Lizard Spock
|--------------------------------------------------------------------------
|
*/

function rpsls($pl1, $pl2) {
   if ($pl1 == $pl2) return "Draw!";
   $x = [
      "scissors" => ["lizard", "paper"],
      "paper" => ["rock", "spock"],
      "rock" => ["lizard", "scissors"],
      "lizard" => ["spock", "paper"],
      "spock" => ["scissors", "rock"]
   ];
   return in_array($pl2, $x[$pl1]) ? "Player 1 Won!" : "Player 2 Won!";
}


function rpsls($player1, $player2){
   $values = ['scissors', 'paper', 'rock', 'lizard', 'spock'];
   $relation = array_search($player2, $values) - array_search($player1, $values);
   switch ($relation) {
      case 0: return "Draw!";
      case 1: case -4: return "Player 1 Won!";
      case 2: case -3: return "Player 2 Won!";
      case 3: case -2: return "Player 1 Won!";
      case 4: case -1: return "Player 2 Won!";
   }
}


function rpsls($player1, $player2){
   $a = substr($player1, 0, 2);
   $b = substr($player2, 0, 2);
   return $a == $b ? 'Draw!' : (preg_match("/scpa|paro|roli|lisp|spsc|scli|lipa|pasp|spro|rosc/", $a. $b) ? 'Player 1 Won!' : 'Player 2 Won!');
}


print_r(rpsls("rock", "lizard") . " Player 1 Won!
");
print_r(rpsls("paper", "rock") . " Player 1 Won!
");
print_r(rpsls("lizard", "scissors") . " Player 2 Won!
");
print_r(rpsls("spock", "lizard") . " Player 2 Won!
");
print_r(rpsls("rock", "rock") . " Draw!
");
print_r(rpsls("spock", "spock") . " Draw!
");