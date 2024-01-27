/*
|--------------------------------------------------------------------------
| Multiplication - Generators #2
|--------------------------------------------------------------------------
|
*/

function* generator(a) {
   for (let x = 1; ; x++) yield `${a} x ${x} = ${a * x}`;
}


function* generator(a, b = 1) {
   while (true) yield `${a} x ${b} = ${a * b++}`;
}


function* generator(a) {
   let b = 0;
   while (++b) {
      yield `${a} x ${b} = ${a * b}`;
   }
}