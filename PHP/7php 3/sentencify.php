<?php
/*
|--------------------------------------------------------------------------
| Pull your words together, man!
|--------------------------------------------------------------------------
|
*/

function sentencify($words) {
   return ucfirst(implode(" ", $words)) . ".";
}


function sentencify($words){
   return preg_replace_callback("/^./", function($x){
      return strtoupper($x[0]);
   }, implode(" ", $words)) . ".";
}


function sentencify($words){
   $str = implode(' ',$words) . '.';
   return strtoupper($str)[0].substr($str, 1);  
}


print_r(sentencify(["yes"]) . " Yes.
");
print_r(sentencify(["let", "there", "be", "light"]) . " Let there be light.
");
print_r(sentencify(["extra", "stuff\"''", "stays"]) . " Extra stuff\"'' stays.
");