/*
|--------------------------------------------------------------------------
| Help the Fruit Guy
|--------------------------------------------------------------------------
|
*/

function removeRotten(x) {
   return x != null ? x.map(i => i.replace('rotten', '').toLowerCase()) : []
}


const removeRotten = a => (a || []).map(a => a.replace('rotten', '').toLowerCase())


function removeRotten(bag) {
   return bag ? bag.map(x => x.toLowerCase().replace(/rotten/ig, "")) : [];
}


function removeRotten(bag) {
   return Array.isArray(b) ? b.map(e => e.replace("rotten", "").toLowerCase()) : []
}


console.log(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]), ["apple", "banana", "kiwi", "melone", "orange"])
console.log(removeRotten([]), [])
console.log(removeRotten(null), [])