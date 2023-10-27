<?php
/*
|--------------------------------------------------------------------------
| Fibonacci's FizzBuzz
|--------------------------------------------------------------------------
|
*/

function fibs_fizz_buzz($n) {
   $x = [1, 1];
   for ($i = 2; $i < $n; $i++) $x[] = $x[$i - 1] + $x[$i - 2];
   $res = array_map(function($i) { return $i % 15 == 0 ? "FizzBuzz" : ($i % 3 == 0 ? "Fizz" : ($i % 5 == 0 ? "Buzz" : $i)); }, $x);
   return $n == 1 ? [1] : $res;
}


function fibs_fizz_buzz($n) {
   $fib = [1, 1];
   $fizz = [1, 1];
   while (count($fib) < $n) {
      $new = $fib[count($fib) - 2] + $fib[count($fib) - 1];
      $fib[] = $new;
      $fizz[] = ($new % 3 == 0) ? (($new % 15 === 0) ? "FizzBuzz": "Fizz") : (($new % 5 === 0) ? "Buzz" : $new);
   }
   return array_slice($fizz, 0, $n);
}


function fibs_fizz_buzz($n) {
   $fibs = [0, 1];
   $result = [1];
   for($i=2;$i<=$n;$i++){
      $fibs[$i] = $fibs[$i-2] + $fibs[$i-1];
      if($fibs[$i]%3==0 && $fibs[$i]%5==0) $result[]='FizzBuzz';
      elseif($fibs[$i]%3==0) $result[]='Fizz';
      elseif($fibs[$i]%5==0) $result[]='Buzz';
      else $result[]=$fibs[$i];
   }
   return $result;
}


print_r(fibs_fizz_buzz(5));
print_r(fibs_fizz_buzz(1));