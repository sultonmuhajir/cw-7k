/*
|--------------------------------------------------------------------------
| Bumps in the Road
|--------------------------------------------------------------------------
|
*/

function bump(x) {
   return x.replace(/_/ig, '').length <= 15 ? 'Woohoo!' : 'Car Dead';
}


const bump = x => x.split ``.filter(e => e === 'n').length > 15 ? 'Car Dead' : 'Woohoo!';
const bump = x => --x.split(`n`).length > 15 ? `Car Dead` : `Woohoo!`;
const bump = x => x.split('n').length < 17 ? 'Woohoo!' : 'Car Dead'


function bump(x) {
   return x.match(new RegExp("n", "g")).length > 15 ? "Car Dead" : "Woohoo!";
}


with(require('ramda')) {
   const isSafe = pipe(split `n`, length, gt `17`)
   var bump = ifElse(isSafe, always('Woohoo!'), always('Car Dead'))
}


console.log(bump("n"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");