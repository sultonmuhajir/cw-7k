<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #7: Remove words from the sentence if it contains one exclamation mark
|--------------------------------------------------------------------------
|
*/

function remove($string) {
   return implode(" ", array_filter(explode(" ", $string), function($i) {
      return count(explode("!", $i)) !== 2;
   }));
}


function remove(string $s): string {
   return join(' ', array_filter(explode(' ', $s), function($w) {
      return preg_match_all('/\!/', $w) !== 1;
   }));
}


function remove(string $s): string {
   $arr = explode(' ',$s);
   $res = array();
   foreach($arr as $v)
      if(substr_count($v,'!')!==1)
         $res[] = $v;
   return implode(' ',$res);
}


print_r(remove("Hi!") . " 
");
print_r(remove("Hi! Hi!") . " 
");
print_r(remove("Hi! Hi! Hi!") . " 
");
print_r(remove("Hi Hi! Hi!") . " Hi
");
print_r(remove("Hi! !Hi Hi!") . " 
");
print_r(remove("Hi! Hi!! Hi!") . " Hi!!
");
print_r(remove("Hi! !Hi! Hi!") . " !Hi!
");