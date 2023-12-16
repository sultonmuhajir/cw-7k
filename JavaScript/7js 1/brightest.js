/*
|--------------------------------------------------------------------------
| Which color is the brightest?
|--------------------------------------------------------------------------
|
*/

function brightest(colors) {
   return colors.sort((a, b) => {
      const x = (str) => Math.max(...[str.slice(1, 3), str.slice(3, 5), str.slice(5, 7)].map((x) => parseInt(x, 16)));
      return x(b) - x(a);
   })[0];
}


function brightest(colors) {
   const rgb = colors.map((c) => {
      const r = parseInt(c.slice(1, 3), 16);
      const g = parseInt(c.slice(3, 5), 16);
      const b = parseInt(c.slice(5, 7), 16);

      return Math.max(r, g, b);
   });
   const max = Math.max(...rgb);
   return colors[rgb.indexOf(max)];
}


function brightest(colors) {
   let max = 0;
   let num = 0;
   for (let i = 0; i < colors.length; i++) {
      for (let j = 1; j < 6; j = j + 2) {
         if (max < Number("0x" + colors[i].substr(j, 2))) {
            max = Number("0x" + colors[i].substr(j, 2));
            num = i;
         }
      }
   }
   return colors[num];
}


console.log(brightest(["#001000", "#000000"]), "#001000");
console.log(brightest(["#ABCDEF", "#123456"]), "#ABCDEF");
console.log(brightest(["#00FF00", "#FFFF00"]), "#00FF00");
console.log(brightest(["#FFFFFF", "#1234FF"]), "#FFFFFF");
console.log(brightest(["#FFFFFF", "#123456", "#000000"]), "#FFFFFF");