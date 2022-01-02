/*
|--------------------------------------------------------------------------
| Simple Fun #74: Growing Plant
|--------------------------------------------------------------------------
|
*/

function growingPlant(upSpeed, downSpeed, desiredHeight) {
   i = 0;
   x = 0;
   while (x < desiredHeight) {
      x += upSpeed;
      if (x < desiredHeight) {
         x -= downSpeed;
      }
      i += 1;
   }
   return i
}


const growingPlant = (u, d, h) => Math.max(Math.ceil((h - u) / (u - d)), 0) + 1;


function growingPlant(upSpeed, downSpeed, desiredHeight) {
   let i = 1;
   for (let height = upSpeed; height < desiredHeight; height = height + upSpeed) {
      height = height - downSpeed;
      i++;
   }
   return i;
}


function growingPlant(u, d, m) {
   return Math.max(1, Math.ceil((m - d) / (u - d)));
}


console.log(growingPlant(100, 10, 910), 10)
console.log(growingPlant(10, 9, 4), 1)