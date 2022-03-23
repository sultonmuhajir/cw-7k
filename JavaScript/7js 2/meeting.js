/*
|--------------------------------------------------------------------------
| The Office IV - Find a Meeting Room
|--------------------------------------------------------------------------
|
*/

function meeting(x) {
   return x.indexOf("O") < 0 ? 'None available!' : x.indexOf("O");
}


function meeting(x) {
   return !x.includes(`O`) ? `None available!` : x.indexOf(`O`);
}


function meeting(x) {
   return (a = x.indexOf('O')) > -1 ? a : 'None available!';
}


console.log(meeting(['X', 'O', 'X']), 1);
console.log(meeting(['O', 'X', 'X', 'X', 'X']), 0);
console.log(meeting(['X', 'X', 'X', 'X', 'X']), 'None available!');