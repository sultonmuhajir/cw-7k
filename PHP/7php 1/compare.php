<?php
/*
|--------------------------------------------------------------------------
| Compare Strings by Sum of Chars
|--------------------------------------------------------------------------
|
*/

function compare($s1, $s2) {
   $s1 = array_sum(array_map('ord', str_split(ctype_alpha($s1) ? strtoupper($s1) : "")));
   $s2 = array_sum(array_map('ord', str_split(ctype_alpha($s2) ? strtoupper($s2) : "")));
   return $s1 == $s2;
}


function compare($s1, $s2) {
   $r1 = preg_match('/^[a-zA-Z]+$/',$s1) ? 
      array_sum(array_map('ord',str_split(strtoupper($s1))))
      : 0;
   $r2 = preg_match('/^[a-zA-Z]+$/',$s2) ? 
      array_sum(array_map('ord',str_split(strtoupper($s2))))
      : 0;
   return $r1 == $r2;
}


function compare($s1, $s2) {
   if(!ctype_alpha($s1) || !ctype_alpha($s2)) return true;
   return array_sum(array_map('ord', str_split(strtoupper($s1)))) == array_sum(array_map('ord', str_split(strtoupper($s2))));
}


print_r(compare("AD", "BC") . ' ' . true . '
');
print_r(compare("AD", "DD") . ' ' . false . '
');
print_r(compare("gf", "FG") . ' ' . true . '
');
print_r(compare("zz1", "") . ' ' . true . '
');