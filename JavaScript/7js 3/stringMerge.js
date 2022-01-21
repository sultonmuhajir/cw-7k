/*
|--------------------------------------------------------------------------
| String Merge!
|--------------------------------------------------------------------------
|
*/

function stringMerge(string1, string2, letter) {
   let s1 = 0
   let s2 = 0
   for (let i = 0; i < string1.length; i++) {
      if (string1[i] == letter) {
         s1 = i;
         break
      }
   }
   for (let j = 0; j < string2.length; j++) {
      if (string2[j] == letter) {
         s2 = j;
         break
      }
   }
   return `${string1.slice(0, s1)}${string2.slice(s2, string2.length)}`
}


function stringMerge(string1, string2, letter) {
   return `${string1.split(letter, 1)}${string2.slice(string2.indexOf(letter))}`;
}


function stringMerge(string1, string2, letter) {
   let subs1 = string1.substr(0, string1.indexOf(letter));
   let subs2 = string2.substr(string2.indexOf(letter));
   return subs1 + subs2
}


function stringMerge(a, b, c) {
   return a.slice(0, a.indexOf(c)) +
      b.slice(b.indexOf(c));
}


console.log(stringMerge("person", "here", "e"), "pere");
console.log(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
console.log(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyz")
console.log(stringMerge("12345654321", "123456789", "6"), "123456789");
console.log(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
console.log(stringMerge("incredible", "people", "e"), "increople");