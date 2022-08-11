/*
|--------------------------------------------------------------------------
| Ordered Count of Characters
|--------------------------------------------------------------------------
|
*/

function orderedCount(text) {
   const unq = [...new Set(text)];
   let res = [];
   for (let i = 0; i < unq.length; i++) {
      res.push([unq[i], [...text].filter((x) => x == unq[i]).length]);
   }
   return res;
}


function orderedCount(text) {
   return [...new Set([...text])].map((char) => [char, text.split(char).length - 1]);
}


function orderedCount(text) {
   return Array.from(new Set(text)).map((c) => [c, text.match(new RegExp(c, "g")).length]);
}


console.log(orderedCount("abracadabra"), [
   ["a", 5],
   ["b", 2],
   ["r", 2],
   ["c", 1],
   ["d", 1],
]);