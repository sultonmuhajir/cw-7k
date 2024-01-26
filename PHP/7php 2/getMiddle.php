<?php
/*
|--------------------------------------------------------------------------
| Get the Middle Character
|--------------------------------------------------------------------------
|
*/

function getMiddle($text) {
   $start = ceil(strlen($text) / 2 - 1);
   $len = strlen($text) % 2 == 0 ? 2 : 1;
   return substr($text, $start, $len);
}


function getMiddle($text) {
   return substr($text, (strlen($text)-1)/2, 2-strlen($text)%2);
}


function getMiddle($text) {
   $len = strlen($text);
   if ($len % 2 === 0) {
     return substr($text, $len / 2 - 1, 2);
   }
   return substr($text, $len / 2, 1);
}


function getMiddle($text) {
   $length = strlen($text);
   return substr($text, ($length - 1) / 2, $length % 2 == 0 ? 2 : 1);
}


print_r(getMiddle("test"). " es
");
print_r(getMiddle("testing"). " t
");
print_r(getMiddle("middle"). " dd
");
print_r(getMiddle("A"). " A
");