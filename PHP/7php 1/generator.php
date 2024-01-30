<?php
/*
|--------------------------------------------------------------------------
| Multiplication - Generators #2
|--------------------------------------------------------------------------
|
*/

function generator($a) {
   $x = 1;
   while (true) {
      yield "$a x $x = " . $a * $x; $x++;
   }
}


function generator($a) {
   for($b=1; true; $b++) yield $a.' x '.$b.' = '.$a*$b;
}


function generator($a, $i=1) {
   while(true) yield "$a x $i = " . $i++ * $a;
}