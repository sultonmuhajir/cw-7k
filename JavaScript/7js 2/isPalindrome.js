/*
|--------------------------------------------------------------------------
| Palindrome Strings
|--------------------------------------------------------------------------
|
*/

function isPalindrome(line) {
   return line == line.split('').reverse().join('')
}


function isPalindrome(line) {
   let l = 0,
      h = line.length - 1;
   while (l < h) {
      if (line[l] != line[h]) return false;
      l++;
      h--;
   }
   return true;
}


function isPalindrome(line) {
   let line = line.toString()
   for (i = 0; i < line.length; i++) {
      if (line[i] != line[line.length - i - 1]) {
         return false
      }
   }
   return true
}


console.log(isPalindrome("anna"), true);
console.log(isPalindrome("walter"), false);