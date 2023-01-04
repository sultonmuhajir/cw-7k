/*
|--------------------------------------------------------------------------
| Sort the Vowels!
|--------------------------------------------------------------------------
|
*/

function sortVowels(s) {
   const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
   let hsl = "";
   for (let i in s) {
      vowels.includes(s[i]) ? hsl += `|${s[i]}` : hsl += `${s[i]}|`;
      if (i != s.length - 1) {
         hsl += "\n";
      }
   }
   return hsl;
}


const sortVowels = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');


function sortVowels(s) {
   return typeof (s) == 'string' ? (s.split('').map(x => /[aeiou]/i.test(x) ? '|' + x : x + '|').join('\n')) : '';
}


console.log(sortVowels('Codewars'), 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|');
console.log(sortVowels('Rnd Te5T'), '\n\nR|\nn|\nd|\n |\nT|\n|e\n5|\nT|');
console.log(sortVowels(1337), '');
console.log(sortVowels(undefined), '');