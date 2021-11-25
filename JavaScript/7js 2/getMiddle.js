/*
|--------------------------------------------------------------------------
| Get the Middle Character
|--------------------------------------------------------------------------
|
*/

function getMiddle(s) {
   let start = s.length / 2;
   let len = 1;
   if (s.length % 2 == 0) {
      start -= 1;
      len += 1;
   }
   return s.substring(start, start + len);
}


function getMiddle(s) {
   const start = Math.ceil(s.length / 2 - 1);
   const len = s.length % 2 == 0 ? 2 : 1;
   return s.substr(start, len);
}


const getMiddle = s => s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);


console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");