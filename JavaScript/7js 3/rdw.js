/*
|--------------------------------------------------------------------------
| Remove duplicate words
|--------------------------------------------------------------------------
|
*/

function removeDuplicateWords(s) {
   let arr = s.split(' ');
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      if (res.includes(arr[i]) == false) {
         res.push(arr[i])
      }
   }
   return res.join(' ');
}


function removeDuplicateWords(s) {
   return [...new Set(s.split(' '))].join(' ');
}


function removeDuplicateWords(s) {
   return s.split(' ').filter((n, i, s) => {
      return s.indexOf(n) === i;
   }).join(' ');
}


function removeDuplicateWords(s) {
   return [...s.split ` `.reduce((s, w) => s.add(w), new Set())].join ` `;
}


function removeDuplicateWords(Q) {
   return Q.replace(/ ?(\S+)/g, (V, B) => Q[B] ? '' : Q[B] = V, Q = {})
}


console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');