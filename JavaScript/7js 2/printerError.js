/*
|--------------------------------------------------------------------------
| Printer Errors
|--------------------------------------------------------------------------
|
*/

function printerError(s) {
   res = 0
   x = 'abcdefghijklm'.split('')
   s.split('').forEach(i => {
      if (!x.includes(i)) res += 1
   });
   return `${res}/${s.length}`
}


function printerError(s) {
   return `${s.replace(/[a-m]/gi, "").length}/${s.length}`;
}


function printerError(s) {
   count = 0;
   for (i = 0; i < s.length; i++) {
      if (s[i] > "m") count++
   }
   return count + "/" + s.length;
}


function printerError(s) {
   return (s.match(/[n-z]/g) || []).length + '/' + s.length
}


console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'), "3/56")