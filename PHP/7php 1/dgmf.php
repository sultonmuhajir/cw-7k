<?php
/*
|--------------------------------------------------------------------------
| Don't give me five!
|--------------------------------------------------------------------------
|
*/

function dont_give_me_five($start, $end) {
   $res = 0;
   for ($i=$start; $i <= $end; $i++) { 
      $str = str_split(strval($i));
      if (in_array('5', $str) == false) {
         $res += 1;
      }
   }
   return $res;
}


function dont_give_me_five($start, $end) {
   return count(array_filter(range($start, $end), function($iNumber){
      return strpos((string)$iNumber, '5') === false;
   }));
}


function dont_give_me_five($start, $end) {
   for($i = $start;$i <= $end;$i++){
      if(strstr($i, "5") != true ){
         $k[] = $i;
      } 
   }
   return count($k);
}


function dont_give_me_five($start, $end) {
   return count(preg_grep('/[5]/',range($start, $end),PREG_GREP_INVERT));
}


function dont_give_me_five($start, $end) {
   return count(array_filter(range($start, $end), function($n){
      return !preg_match('~5~', $n); 
   }));
}


print_r(dont_give_me_five(1, 9). ' ' . 8 .'
');
print_r(dont_give_me_five(4, 17). ' ' . 12 .'
');
print_r(dont_give_me_five(40, 60). ' ' . 10 .'
');