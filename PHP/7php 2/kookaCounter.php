<?php
/*
|--------------------------------------------------------------------------
| Kooka-Counter
|--------------------------------------------------------------------------
|
*/

function kookaCounter($laughing) {
   return preg_match_all('/(.a)\1+/', $laughing);
}


function kookaCounter($laughing) {
   $res = 0;
   $arr = explode('a', $laughing);
   for ($i = 0; $i < count($arr) - 1; $i++) {
      if ($arr[$i] != $arr[$i+1]) $res++;
   }
   return $res;
}


function kookaCounter($laughing) {
   return preg_match_all("/(ha)+|(Ha)+/", $laughing);
}


print_r(kookaCounter("") . ' ' . 0 . '
');
print_r(kookaCounter("hahahahaha") . ' ' . 1 . '
');
print_r(kookaCounter("hahahahahaHaHaHa") . ' ' . 2 . '
');
print_r(kookaCounter("HaHaHahahaHaHa") . ' ' . 3 . '
');