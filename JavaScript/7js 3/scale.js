/*
|--------------------------------------------------------------------------
| Scaling Squared Strings
|--------------------------------------------------------------------------
|
*/

function scale(strng, k, n) {
   return strng
      .replace(/[^\n]/g, (i) => Array(k + 1).join(i))
      .replace(/[^\n]+/g, (i) =>
         Array(n + 1)
            .join("\n" + i)
            .slice(1)
      );
}


function scale(strng, k, n) {
   return !strng
      ? strng
      : strng.split`\n`
           .map((t) => [...t].map((u) => u.repeat(k)).join``)
           .reduce((x, y) => [...x, ...Array(n).fill(y)], []).join`\n`;
}


function scale(s, k, n) {
   return s.replace(/./gm, "$&".repeat(k)).replace(/^.+$/gm, "\n$&".repeat(n).slice(1));
}


console.log(
   scale("abcd\nefgh\nijkl\nmnop", 2, 3),
   "aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp"
);
console.log(scale("", 5, 5), "");
console.log(scale("Kj\nSH", 1, 2), "Kj\nKj\nSH\nSH");