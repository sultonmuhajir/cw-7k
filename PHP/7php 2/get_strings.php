<?php
/*
|--------------------------------------------------------------------------
| Interview Question (easy)
|--------------------------------------------------------------------------
|
*/

function get_strings($city) {
   $res = "";
   foreach(array_count_values(str_split(strtolower(str_replace(' ','',$city)))) as $key => $val) {
      $res .= $key . ':' . str_repeat('*', $val) . ',';
   };
   return trim($res, ',');
}


function get_strings($city) {
   $arr = array_count_values(str_split(str_replace(' ', '', strtolower($city))));
   foreach($arr as $char => &$count) {
     $count = $char.':'.str_repeat('*', $count);
   }
   return implode(',', $arr);
}


function get_strings($city) {
   $arr = array_count_values(str_split(preg_replace('/[^a-z]/', '', strtolower($city))));
   return implode(',', array_map(fn ($count, $char) => $char.':'.str_repeat('*', $count), $arr, array_keys($arr)));
}


print_r(get_strings("Chicago") . " c:**,h:*,i:*,a:*,g:*,o:*
");
print_r(get_strings("Bangkok") . " b:*,a:*,n:*,g:*,k:**,o:*
");
print_r(get_strings("Las Vegas") . " l:*,a:**,s:**,v:*,e:*,g:*
");