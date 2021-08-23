<?php
/*
|--------------------------------------------------------------------------
| Mumbling
|--------------------------------------------------------------------------
|
*/

function accum($s) {
   $arr = [];
   $split = str_split(strtolower($s));
   for ($i=0; $i < count($split); $i++) { 
      $res = '';
      for ($j=0; $j <= $i; $j++) {
         $res .= $j == 0 ? strtoupper($split[$i]) : $split[$i];
      }
      array_push($arr, $res);
   }
   return join('-', $arr);
}


function accum($s) {
   foreach (str_split($s) as $position => $char) {
      $words[] = ucwords(str_repeat(strtolower($char), $position + 1));
   }
   return implode('-', $words);
}


function accum($s) {
   $charray = str_split($s);
   array_walk($charray, function(&$char, $index) {
      $char = strtoupper($char) . str_repeat(strtolower($char), $index);
   });
   return implode('-', $charray);
}


function accum($s) {
   $result = [];
   for ($i = 0; $i < strlen($s); $i++) {
      array_push($result, ucfirst(strtolower(str_repeat($s[$i], ($i + 1)))));
   }
   return implode("-",$result);
}


print_r(accum("ZpglnRxqenU"). "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
");
print_r(accum("NyffsGeyylB"). "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb
");