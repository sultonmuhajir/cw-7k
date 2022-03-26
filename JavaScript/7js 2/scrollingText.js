/*
|--------------------------------------------------------------------------
| Scrolling Text
|--------------------------------------------------------------------------
|
*/

function scrollingText(text) {
   let res = []
   for (let i = 0; i < text.length; i++) {
      res.push(text.toUpperCase())
      text = text.slice(1) + text.slice(0, 1);
   }
   return res;
}


function scrollingText(text) {
   text = text.toUpperCase();
   return [...text].map((_, i) => text.slice(i) + text.slice(0, i));
}


function scrollingText(text) {
   return Array.from({
      length: text.length
   }, (_, i) => (text.slice(i) + text.slice(0, i)).toUpperCase())
}


function scrollingText(text) {
   let res = []
   for (let i = 0; i < text.length; i++) {
      res.push((text.slice(i) + text.slice(0, i)).toUpperCase())
   }
   return res;
}


console.log(scrollingText("abc"), ["ABC", "BCA", "CAB"])