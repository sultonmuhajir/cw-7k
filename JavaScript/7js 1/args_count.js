/*
|--------------------------------------------------------------------------
| How many arguments
|--------------------------------------------------------------------------
|
*/

function args_count() {
   return arguments.length
}


function args_count(...args) {
   return args.length
}


function args_count() {
   let i = 0;
   for (argument of arguments) {
      i++
   }
   return i;
}


console.log(args_count(1, 2), 2);
console.log(args_count(), 0);
console.log(args_count('A', 'B', 'C'), 3);
console.log(args_count(["foo", "bar"]), 1);