/*
|--------------------------------------------------------------------------
| Count salutes
|--------------------------------------------------------------------------
|
*/

function countSalutes(hallway) {
   let res = 0;
   let right = 0;
   for (let i of hallway) {
      if (i == ">") right++;
      else if (i == "<") res += right;
   }
   return res * 2;
}


function countSalutes(hallway) {
   return hallway.replace(/>(?=(.*))|.()/g, "$1$2").replace(/[^<]/g, "").length * 2;
}


function countSalutes(hallway) {
   let l = 0;
   return hallway.split("").reduce((a, x) => {
      switch (x) {
         case ">":
            l++;
            break;
         case "<":
            a += l * 2;
      }
      return a;
   }, 0);
}


console.log(countSalutes(">--->---<--<"), 8);
console.log(countSalutes("<----<---<-->"), 0);
console.log(countSalutes(">-<->-<"), 6);