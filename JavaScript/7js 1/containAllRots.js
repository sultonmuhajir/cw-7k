/*
|--------------------------------------------------------------------------
| All Inclusive?
|--------------------------------------------------------------------------
|
*/

function containAllRots(strng, arr) {
   let count = 0;
   for (let i = 0; i < strng.length; i++) {
      x = strng[i] + strng.slice(i + 1, strng.length) + strng.slice(0, i);
      if (arr.includes(x)) count += 1;
   }
   return count == strng.length;
}


function containAllRots(strng, arr) {
   return [...strng]
      .map((_, i) => strng.substr(i) + strng.slice(0, i))
      .every((x) => arr.includes(x));
}


function containAllRots(str, arr) {
   for (let i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
         return false;
      }
   }
   return true;
}


console.log(containAllRots("", []), true);
console.log(containAllRots("", ["bsjq", "qbsj"]), true);
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true);
console.log(
   containAllRots("XjYABhR", [
      "TzYxlgfnhf",
      "yqVAuoLjMLy",
      "BhRXjYA",
      "YABhRXj",
      "hRXjYAB",
      "jYABhRX",
      "XjYABhR",
      "ABhRXjY",
   ]),
   false
);