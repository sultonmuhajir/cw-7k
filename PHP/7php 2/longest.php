<?php
/*
|--------------------------------------------------------------------------
| Two to One
|--------------------------------------------------------------------------
|
*/

function longest($a, $b) {
   $arr = array_unique(str_split("{$a}{$b}"));
   sort($arr);
   return implode('', $arr);
}


function longest($a, $b) {
   return count_chars($a.$b, 3);
}


function longest($a, $b) {
   $c = str_split($a.$b); sort($c); 
   $e = preg_replace('/(\w)\1+/', "$1", implode("", $c));
   return $e;
}


function longest( string $a, string $b ): string {
   return implode( '', array_intersect( range('a', 'z'), str_split( $a . $b ) ) );
}


print_r(longest("aretheyhere", "yestheyarehere"). " aehrsty
");
print_r(longest("loopingisfunbutdangerous", "lessdangerousthancoding"). " abcdefghilnoprstu
");
print_r(longest("inmanylanguages", "theresapairoffunctions"). " acefghilmnoprstuy
");