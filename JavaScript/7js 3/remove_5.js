/*
|--------------------------------------------------------------------------
| Exclamation marks series #5: Remove all exclamation marks from the end of words
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   return string
      .split(" ")
      .map((i) => i.split(i.replace(/!/g, ""))[0] + i.replace(/!/g, ""))
      .join(" ");
}


function remove(s) {
   return s.replace(/\b!+/g, "");
}


function remove(s) {
   return s.replace(/(\w)!+/g, "$1");
}


console.log(remove("!!!Hi !!hi!!! !hi"), "!!!Hi !!hi !hi");
console.log(remove("!!!jmo!! slvtp zsasif! bxiwn"), "!!!jmo slvtp zsasif bxiwn");