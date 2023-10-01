<?php
/*
|--------------------------------------------------------------------------
| Substituting Variables Into Strings: Padded Numbers
|--------------------------------------------------------------------------
|
*/

function solution($value) {
   return "Value is " . substr("00000".$value, -5);
}


function solution($value){
   return sprintf("Value is %05d",$value);
}


function solution($value){
   return 'Value is '.str_pad($value, 5, "0", STR_PAD_LEFT);
}


print_r(solution(5) . " Value is 00005
");
print_r(solution(1204) . " Value is 01204
");
print_r(solution(109) . " Value is 00109
");
print_r(solution(0) . " Value is 00000
");