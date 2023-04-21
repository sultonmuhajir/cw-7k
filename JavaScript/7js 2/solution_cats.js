/*
|--------------------------------------------------------------------------
| Cats and shelves
|--------------------------------------------------------------------------
|
*/

function solution(start, finish) {
   let diff = finish - start;
   return Math.floor(diff / 3) + (diff % 3);
}


const solution = (s, f) => ((f -= s) / 3 + (f % 3)) | 0;


function solution(start, finish) {
   let res = 0;
   while (start < finish) {
      res++;
      if (start + 3 <= finish) start += 3;
      else start++;
   }
   return res;
}


console.log(solution(1, 5), 2);