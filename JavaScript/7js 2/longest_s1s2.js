/*
|--------------------------------------------------------------------------
| Two to One
|--------------------------------------------------------------------------
|
*/

const longest = (s1, s2) => [...new Set([...new Set(s1)].concat([...new Set(s2)]))].sort().join("");


const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');


function longest(s1, s2) {
   return Array.from(new Set(s1 + s2)).sort().join('');
}


const longest = (s1, s2) => Array.from(s1 + s2).sort().filter((x, i, a) => x !== a[i - 1]).join('');


console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty")
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
console.log(longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")