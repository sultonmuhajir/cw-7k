/*
|--------------------------------------------------------------------------
| Credit Card Mask
|--------------------------------------------------------------------------
|
*/

function maskify(cc) {
   if (cc.length <= 4) {
      return cc;
   } else {
      let awal = cc.substring(0, cc.length - 4)
      let akhir = cc.substr(cc.length - 4);
      let temp = ""
      for (let i in awal) {
         temp += "#";
      }
      return temp + akhir;
   }
}


const maskify = (cc) => '#'.repeat(Math.max(0, cc.length - 4)) + cc.substr(-4);


function maskify(cc) {
   return cc.slice(-4).padStart(cc.length, '#')
}


console.log(maskify("okegays"));
console.log(maskify("18g"));
console.log(maskify("8el"));