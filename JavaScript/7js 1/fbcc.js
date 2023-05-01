/*
|--------------------------------------------------------------------------
| Fizz Buzz Cuckoo Clock
|--------------------------------------------------------------------------
|
*/

function fizzBuzzCuckooClock(time) {
   let x = time.split(":").map((i) => Number(i));
   return x[1] == 0 && x[0] % 12 == 0
      ? Array(12).fill("Cuckoo").join(" ")
      : x[1] == 0
      ? Array(x[0] % 12)
           .fill("Cuckoo")
           .join(" ")
      : x[1] == 30
      ? "Cuckoo"
      : x[1] % 3 == 0 && x[1] % 5 == 0
      ? "Fizz Buzz"
      : x[1] % 3 == 0
      ? "Fizz"
      : x[1] % 5 == 0
      ? "Buzz"
      : "tick";
}


function fizzBuzzCuckooClock(time) {
   let [hour, minute] = time.split(":");
   return minute == 0
      ? "Cuckoo ".repeat(hour % 12 || 12).trim()
      : minute == 30
      ? "Cuckoo"
      : minute % 15 == 0
      ? "Fizz Buzz"
      : minute % 3 == 0
      ? "Fizz"
      : minute % 5 == 0
      ? "Buzz"
      : "tick";
}


function fizzBuzzCuckooClock(time) {
   let [h, m] = time.split(":").map(Number);
   return m == 0 || m == 30
      ? "Cuckoo ".repeat(m == 30 || h % 12 || 12).trim()
      : ["tick", "Fizz", "Buzz", "Fizz Buzz"][+!(m % 3) + 2 * !(m % 5)];
}


console.log(fizzBuzzCuckooClock("13:34"), "tick");
console.log(
   fizzBuzzCuckooClock("21:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
);
console.log(fizzBuzzCuckooClock("11:15"), "Fizz Buzz");
console.log(fizzBuzzCuckooClock("03:03"), "Fizz");
console.log(fizzBuzzCuckooClock("14:30"), "Cuckoo");
console.log(fizzBuzzCuckooClock("08:55"), "Buzz");
console.log(
   fizzBuzzCuckooClock("00:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
);
console.log(
   fizzBuzzCuckooClock("12:00"),
   "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo"
);
console.log(fizzBuzzCuckooClock("14:00"), "Cuckoo Cuckoo");