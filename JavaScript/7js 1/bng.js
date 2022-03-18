/*
|--------------------------------------------------------------------------
| Band name generator
|--------------------------------------------------------------------------
|
*/

function bandNameGenerator(str) {
   return str[0] == str.slice(-1) ?
      str[0].toUpperCase() + str.slice(1) + str.slice(1) :
      'The ' + str[0].toUpperCase() + str.slice(1)
}


function bandNameGenerator(s) {
   return /^(.).*\1$/.test(s) ?
      s[0].toUpperCase() + s.slice(1) + s.slice(1) :
      "The " + s[0].toUpperCase() + s.slice(1)
}


function bandNameGenerator(str) {
   return str.charAt(0) === str.charAt(str.length - 1) ?
      str.charAt(0).toUpperCase() + str.slice(1) + str.slice(1) :
      "The " + str.charAt(0).toUpperCase() + str.slice(1)
}


function bandNameGenerator(s) {
   return s[0] === s.slice(-1) ?
      s.replace(/^./, x => x.toUpperCase()) + s.slice(1) :
      `The ${s.replace(/^./, x => x.toUpperCase())}`
}


console.log(bandNameGenerator('knife'), 'The Knife');
console.log(bandNameGenerator('tart'), 'Tartart');
console.log(bandNameGenerator('sandles'), 'Sandlesandles');
console.log(bandNameGenerator('bed'), 'The Bed');