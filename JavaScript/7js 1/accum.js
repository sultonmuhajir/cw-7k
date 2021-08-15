/*
|--------------------------------------------------------------------------
| Mumbling
|--------------------------------------------------------------------------
|
*/

function accum(s) {
   const arr = [];
   const split = s.toLowerCase().split("");
   for (let i = 0; i < split.length; i++) {
      let result = "";
      for (let j = 0; j <= i; j++) {
         if (j == 0) {
            result += split[i].toUpperCase();
         } else {
            result += split[i];
         }
      }
      arr.push(result);
   }
   return arr.join("-");
}


function accum(s) {
   return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


function accum(str) {
   const letters = str.split('');
   const result = [];
   for (let i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
   }
   return result.join('-');
}


console.log(accum("abCd"), "A-Bb-Ccc-Dddd");
console.log(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");