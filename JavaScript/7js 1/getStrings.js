/*
|--------------------------------------------------------------------------
| Interview Question (easy)
|--------------------------------------------------------------------------
|
*/

function getStrings(city) {
   const arr = city
      .split(" ")
      .join("")
      .split("")
      .map((i) => i.toLowerCase());
   return [...new Set(arr)]
      .map((i) => {
         return i + ":" + "*".repeat(arr.filter((j) => j === i).length);
      })
      .join(",");
}


function getStrings(city) {
   return ((arr) =>
      [...new Set(arr)]
         .join(``)
         .match(/[a-z]/g)
         .map((val) => `${val}:${`*`.repeat(arr.filter((v) => v === val).length)}`)
         .join(`,`))([...city.toLowerCase()]);
}


function getStrings(city) {
   let res = {};
   city
      .replace(/[^A-Z]/gi, "")
      .split("")
      .forEach((ch) => (res[ch.toLowerCase()] = (res[ch.toLowerCase()] || 0) + 1));
   return Array.from(Object.keys(res), (k) => `${k}:${"*".repeat(res[k])}`).join(",");
}


console.log(getStrings("Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*");
console.log(getStrings("Bangkok"), "b:*,a:*,n:*,g:*,k:**,o:*");
console.log(getStrings("Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*");