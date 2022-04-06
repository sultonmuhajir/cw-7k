/*
|--------------------------------------------------------------------------
| Find how many times did a team from a given country win the Champions League?
|--------------------------------------------------------------------------
|
*/

function countWins(winnerList, country) {
   return winnerList.filter(i => i.country == country).length
}


function countWins(winnerList, country) {
   return winnerList.reduce((pre, val) => pre + (val.country === country), 0);
}


function countWins(winnerList, country) {
   let count = 0;
   winnerList.forEach(elem => {
      if (elem.country === country) count++;
   })
   return count;
}


console.log(countWins(winnerList1, 'Portugal'), 1);
console.log(countWins(winnerList1, 'FootLand'), 0);
console.log(countWins(winnerList1, 'Spain'), 9);