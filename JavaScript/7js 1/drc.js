/*
|--------------------------------------------------------------------------
| Resistor Color Codes
|--------------------------------------------------------------------------
|
*/

function decodeResistorColors(bands) {
   let color = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "gray", "white"];
   let band = bands.split(" ");
   let ohms1 =
      Number(String(color.indexOf(band[0])) + String(color.indexOf(band[1]))) *
      10 ** color.indexOf(band[2]);
   let ohms2 =
      ohms1 < 1000
         ? `${ohms1} ohms`
         : ohms1 >= 1000000
         ? `${ohms1 / 1000000}M ohms`
         : `${ohms1 / 1000}k ohms`;
   return band.length == 3 ? `${ohms2}, 20%` : band[3] == "gold" ? `${ohms2}, 5%` : `${ohms2}, 10%`;
}


function decodeResistorColors(bands) {
   const colors = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9, gold: 5, silver: 10},
      [first, second, multiplier, tolerance] = bands.split(" ").map((color) => colors[color]),
      ohm = (10 * first + second) * 10 ** multiplier;
   return `${ohm >= 10 ** 6 ? ohm / 10 ** 6 + "M" : ohm >= 1000 ? ohm / 1000 + "k" : ohm} ohms, ${
      tolerance || 20
   }%`;
}


function decodeResistorColors(bands) {
   const obj = {black: 0, brown: 1, red: 2, orange: 3, yellow: 4, green: 5, blue: 6, violet: 7, gray: 8, white: 9, gold: 5, silver: 10};
   const arr = bands.split(` `);
   const res = (10 * obj[arr[0]] + obj[arr[1]]) * 10 ** obj[arr[2]];
   return `${res >= 1e6 ? `${res / 1e6}M` : res >= 1e3 ? `${res / 1e3}k` : res} ohms, ${
      obj[arr[3]] || 20
   }%`;
}


console.log(decodeResistorColors("yellow violet black"), "47 ohms, 20%");
console.log(decodeResistorColors("yellow violet red gold"), "4.7k ohms, 5%");
console.log(decodeResistorColors("brown black green silver"), "1M ohms, 10%");