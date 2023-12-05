/*
|--------------------------------------------------------------------------
| Alan Partridge III - London
|--------------------------------------------------------------------------
|
*/

function alan(x) {
   let count = 0;
   let y = ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"];
   for (let i = 0; i < y.length; i++) {
      if (x.includes(y[i])) count += 1;
   }
   return count == 4 ? "Smell my cheese you mother!" : "No, seriously, run. You will miss it.";
}


function alan(x) {
   return ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"].every(
      (e) => x.indexOf(e) != -1
   )
      ? "Smell my cheese you mother!"
      : "No, seriously, run. You will miss it.";
}


function alan(x) {
   return ["Rejection", "Disappointment", "Backstabbing Central", "Shattered Dreams Parkway"].every(
      (e) => x.some((a) => e === a)
   )
      ? "Smell my cheese you mother!"
      : "No, seriously, run. You will miss it.";
}


console.log(
   alan([
      "Norwich",
      "Rejection",
      "Disappointment",
      "Backstabbing Central",
      "Shattered Dreams Parkway",
      "London",
   ]),
   "Smell my cheese you mother!"
);
console.log(alan(["London", "Norwich"]), "No, seriously, run. You will miss it.");