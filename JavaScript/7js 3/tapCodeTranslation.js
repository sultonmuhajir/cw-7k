/*
|--------------------------------------------------------------------------
| Tap Code Translation
|--------------------------------------------------------------------------
|
*/

function tapCodeTranslation(text) {
   let abj = "abcdefghijlmnopqrstuvwxyz";
   let x = (i) => ".".repeat(Math.floor(abj.indexOf(i) / 5) + 1);
   let y = (i) => ".".repeat((abj.indexOf(i) % 5) + 1);
   return text
      .replace(/k/g, "c")
      .replace(/[a-z]/g, (i) => `${x(i)} ${y(i)} `)
      .trim();
}


function tapCodeTranslation(text) {
   text
      .split("")
      .map((el) =>
         ((code) => {
            let num = code - 96;
            if (code === 107) num = 3;
            if (code > 107) num -= 1;
            return ".".repeat(Math.ceil(num / 5)).concat(" ", ".".repeat(((num - 1) % 5) + 1));
         })(el.charCodeAt(0))
      )
      .join(" ");
}


function tapCodeTranslation(text) {
   let obj = {
      a: [1, 1],
      b: [1, 2],
      c: [1, 3],
      k: [1, 3],
      d: [1, 4],
      e: [1, 5],
      f: [2, 1],
      g: [2, 2],
      h: [2, 3],
      i: [2, 4],
      j: [2, 5],
      l: [3, 1],
      m: [3, 2],
      n: [3, 3],
      o: [3, 4],
      p: [3, 5],
      q: [4, 1],
      r: [4, 2],
      s: [4, 3],
      t: [4, 4],
      u: [4, 5],
      v: [5, 1],
      w: [5, 2],
      x: [5, 3],
      y: [5, 4],
      z: [5, 5],
   };
   return [...text].map((e) => obj[e].map((n) => ".".repeat(n)).join(" ")).join(" ");
}


console.log(tapCodeTranslation("test"), ".... .... . ..... .... ... .... ....", `Text: "test"`);
console.log(tapCodeTranslation("total"), ".... .... ... .... .... .... . . ... .", `Text: "total"`);
console.log(tapCodeTranslation("break"), ". .. .... .. . ..... . . . ...", `Text: "break"`);
console.log(
   tapCodeTranslation("something"),
   ".... ... ... .... ... .. . ..... .... .... .. ... .. .... ... ... .. ..",
   `Text: "something"`
);
console.log(tapCodeTranslation("final"), ".. . .. .... ... ... . . ... .", `Text: "final"`);