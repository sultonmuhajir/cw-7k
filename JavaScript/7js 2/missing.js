/*
|--------------------------------------------------------------------------
| Jenny the youngest detective
|--------------------------------------------------------------------------
|
*/

function missingWord(nums, str) {
   let num = nums.sort((a, b) => a - b);
   let string = str.split(" ").join("");
   let res = num
      .map((i) => string[i])
      .join("")
      .toLowerCase();
   return res.length == 3 ? res : "No mission today";
}


function missingWord(nums, str) {
   return str.replace(/\s/g, "").length > Math.max(...nums)
      ? nums
           .sort((a, b) => a - b)
           .map((v) => str.replace(/\s/g, "")[v])
           .join("")
           .toLowerCase()
      : "No mission today";
}


function missingWord(nums, str) {
   let res = nums
      .sort((a, b) => a - b)
      .map((x) => str.replace(/\s/g, "")[x] || "_")
      .join("")
      .toLowerCase();
   return /_/.test(res) ? "No mission today" : res;
}


console.log(missingWord([5, 0, 3], "I love you"), "ivy");
console.log(missingWord([29, 31, 8], "The quick brown fox jumps over the lazy dog"), "bay");
console.log(missingWord([12, 4, 6], "Good Morning"), "No mission today");