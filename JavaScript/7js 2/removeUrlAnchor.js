/*
|--------------------------------------------------------------------------
| Remove anchor from URL
|--------------------------------------------------------------------------
|
*/

function removeUrlAnchor(url) {
   return url.split('#')[0];
}


function removeUrlAnchor(url) {
   return url.replace(/#.*/gi, "");
}


function removeUrlAnchor(url) {
   let string = ""
   for (let i = 0; i < url.length; i++) {
      if (url[i] === "#") {
         break
      }
      string += url[i]
   }
   return string
}


function removeUrlAnchor(url) {
   return url.match(/((?!#).)+/)[0];
}


console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'), 'www.codewars.com/katas/?page=1')
console.log(removeUrlAnchor('www.codewars.com/katas/'), 'www.codewars.com/katas/')