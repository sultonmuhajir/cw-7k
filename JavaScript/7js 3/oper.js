/*
|--------------------------------------------------------------------------
| Moves in squared strings (I)
|--------------------------------------------------------------------------
|
*/

function vertMirror(s) {
   const arr = s.split("\n");
   let res = [];
   arr.forEach((i) => {
      res.push([...i].reverse().join(""));
   });
   return res.join("\n");
}
const horMirror = (s) => s.split("\n").reverse().join("\n");
const oper = (f, s) => f(s);


const vertMirror = s => s.map(s => [...s].reverse().join(''));
const horMirror = s => s.reverse();
const oper = (fct, s) => fct(s.split("\n")).join("\n");


console.log(
   oper(vertMirror, "hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu"),
   "QHdgSh\noaMDnH\nXxNNlC\nHxxvRi\nAvVTqb\nuRySvw"
);
console.log(
   oper(vertMirror, "IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx"),
   "EWTOzI\nMCebkk\nMxZzuW\nwJddDv\nFHyJij\nxSfHVP"
);
console.log(oper(horMirror, "lVHt\nJVhv\nCSbg\nyeCt"), "yeCt\nCSbg\nJVhv\nlVHt");
console.log(oper(horMirror, "njMK\ndbrZ\nLPKo\ncEYz"), "cEYz\nLPKo\ndbrZ\nnjMK");