/*
|--------------------------------------------------------------------------
| Disemvowel Trolls
|--------------------------------------------------------------------------
|
*/

function disemvowel(str) {
   let string = "";
   for (let i = 0; i < str.length; i++) {
      if (str[i] != "a" && str[i] != "i" && str[i] != "u" && str[i] != "e" && str[i] != "o" &&
         str[i] != "A" && str[i] != "I" && str[i] != "U" && str[i] != "E" && str[i] != "O") {
         string += str[i]
      }
   }
   return string;
}


function disemvowel(str) {
   return str.replace(/[aeiou]/gi, '');
}


function disemvowel(str) {
   const vowels = 'aeiou';
   return str.split('').filter(letter => !vowels.includes(letter.toLowerCase())).join('');
}


console.log(disemvowel("Febrina Alivia"),
   "Fbrn lv")
console.log(disemvowel("This website is for losers LOL!"),
   "Ths wbst s fr lsrs LL!")