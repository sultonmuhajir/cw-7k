<?php
/*
|--------------------------------------------------------------------------
| Disarium Number (Special Numbers Series #3)
|--------------------------------------------------------------------------
|
*/

function disariumNumber($n) {
   $str = strval($n);
   $res = 0;
   for ($i = 0; $i < strlen($n); $i++) {
      $res += intval($str[$i]) ** ($i + 1);
   }
   return $res == $n ? "Disarium !!" : "Not !!";
}


function disariumNumber($n) {
   return array_sum(array_map("pow", str_split($n), range(1, strlen($n)))) === $n ?
      "Disarium !!" : "Not !!";
}


function disariumNumber($n) {
   $res = 0;
   foreach (str_split((string)$n) as $k => $v) {
      $res += $v ** ($k + 1); 
   }
   return $res == $n ? "Disarium !!" : "Not !!";
}


function disariumNumber($n) {
   $arr = str_split($n);
   array_walk($arr, function(&$e, $key) {$e = $e ** ($key + 1);});
   return array_sum($arr) == $n ? 'Disarium !!' : 'Not !!';
}


print(disariumNumber(89) . " Disarium !!
");
print(disariumNumber(518) . " Disarium !!
");
print(disariumNumber(1024) . " Not !!
");