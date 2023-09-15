<?php
/*
|--------------------------------------------------------------------------
| Jumping Number (Special Numbers Series #4)
|--------------------------------------------------------------------------
|
*/

function jumpingNumber($n) {
   $arr = str_split(strval($n));
   for ($i = 0; $i < count($arr) - 1; $i++) {
      if (abs($arr[$i] - $arr[$i + 1]) != 1) return "Not!!";
   }
   return "Jumping!!";
}


function jumpingNumber(string $n) {
   for($i=0; $i<strlen($n)-1; $i++) if(abs($n[$i] - $n[$i+1]) != 1) return "Not!!";
   return "Jumping!!";
}


function jumpingNumber(string $number): string {
   return preg_match(
      '/\d(?:(?<!1)0|(?<!0|2)1|(?<!1|3)2|(?<!2|4)3|(?<!3|5)4|(?<!4|6)5|(?<!5|7)6|(?<!6|8)7|(?<!7|9)8|(?<!8)9)/', 
      $number    
   ) ? 'Not!!' : 'Jumping!!';
}


print_r(jumpingNumber(32) . " Jumping!!
");
print_r(jumpingNumber(79) . " Not!!
");
print_r(jumpingNumber(98) . " Jumping!!
");
print_r(jumpingNumber(98789876) . " Jumping!!
");