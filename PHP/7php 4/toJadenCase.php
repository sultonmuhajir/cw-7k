<?php
/*
|--------------------------------------------------------------------------
| Jaden Casing Strings
|--------------------------------------------------------------------------
|
*/

function toJadenCase($string) 
{
   $arr = explode(' ', $string);
   $result = [];
   foreach ($arr as $i) {
      array_push($result, strtoupper($i[0]). substr($i, 1));
   }
   return implode(' ', $result);
}


function toJadenCase($string) 
{
   return ucwords($string);
}


function toJadenCase($str) 
{
   return join(' ', array_map('ucfirst', explode(' ', $str)));
}


$str = "How can mirrors be real if our eyes aren't real";
print_r(toJadenCase($str). " How Can Mirrors Be Real If Our Eyes Aren't Real");