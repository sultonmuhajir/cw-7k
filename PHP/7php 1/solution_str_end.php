<?php
/*
|--------------------------------------------------------------------------
| String ends with?
|--------------------------------------------------------------------------
|
*/

function solution($str, $ending) {
   return $ending === substr($str, strlen($str) - strlen($ending), strlen($str));
}


function solution(string $str, string $ending) : bool {
   return substr_compare($str, $ending, -strlen($ending), strlen($ending)) == 0;
}


function solution(string $str, string $ending): bool {
   return str_ends_with($str, $ending);
}


function solution(string $str, string $ending): bool {
   return $ending == '' || substr_compare($str, $ending, -strlen($ending)) == 0;
}


print_r(solution('abcde', 'cde'). ' ' . true . '
');
print_r(solution('abcde', 'abc'). ' ' . false . '
');