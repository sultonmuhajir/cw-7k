/*
|--------------------------------------------------------------------------
| Battle of the characters (Easy)
|--------------------------------------------------------------------------
|
*/

function battle(x, y) {
   num_x = x.split("").map((i) => i.charCodeAt(0) - 64).reduce((a, b) => a + b);
   num_y = y.split("").map((i) => i.charCodeAt(0) - 64).reduce((a, b) => a + b);
   return num_x > num_y ? x : num_x < num_y ? y : "Tie!";
}


function battle(x, y) {
   const X = [...x].reduce((ac, e) => ac + e.charCodeAt() - 64, 0);
   const Y = [...y].reduce((ac, e) => ac + e.charCodeAt() - 64, 0);
   return X > Y ? x : X < Y ? y : "Tie!";
}


function battle(x, y) {
   return ((func) => (func(x) > func(y) ? x : func(x) < func(y) ? y : "Tie!"))((arr) =>
      [...arr].map((e) => e.charCodeAt() - 64).reduce((a, b) => a + b)
   );
}


console.log(battle("AAA", "Z"), "Z");
console.log(battle("ONE", "TWO"), "TWO");
console.log(battle("ONE", "NEO"), "Tie!");
console.log(battle("FOUR", "FIVE"), "FOUR");