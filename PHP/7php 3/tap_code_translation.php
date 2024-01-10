<?php
/*
|--------------------------------------------------------------------------
| Tap Code Translation
|--------------------------------------------------------------------------
|
*/

function tap_code_translation($text) {
	$code = strtr(
      $text, array(
      "a" => ". . ", "b" => ". .. ", "c" => ". ... ", "d" => ". .... ", "e" => ". ..... ",
      "f" => ".. . ", "g" => ".. .. ", "h" => ".. ... ", "i" => ".. .... ", "j" => ".. ..... ",
      "k" => ". ... ", "l" => "... . ", "m" => "... .. ", "n" => "... ... ", "o" => "... .... ", "p" => "... ..... ",
      "q" => ".... . ", "r" => ".... .. ", "s" => ".... ... ", "t" => ".... .... ", "u" => ".... ..... ",
      "v" => "..... . ", "w" => "..... .. ", "x" => "..... ... ", "y" => "..... .... ", "z" => "..... ..... "
      )          
   );
   return substr($code, 0, -1);
}


function tap_code_translation($text) {
   $arr = [];
   for($i=1;$i<=5;$i++){
      for($j=1;$j<=5;$j++){
         $arr[]=' '.str_repeat('.',$i).' '.str_repeat('.',$j);
      }
   }
   $letters = range('a','z');
   array_splice($letters, 10, 1);
   $tapcode = array_combine($letters, $arr);
   $text = str_replace('k', 'c', $text);
   return ltrim(strtr($text, $tapcode));
}


function tap_code_translation($text) {
   $arr = [
      ['A', 'B', 'C', 'D', 'E'],
      ['F', 'G', 'H', 'I', 'J'],
      ['L', 'M', 'N', 'O', 'P'],
      ['Q', 'R', 'S', 'T', 'U'],
      ['V', 'W', 'X', 'Y', 'Z'],
   ];
   $str = str_split(strtoupper(str_replace('k', 'c', $text)));
   $s = null;
   foreach ($str as $val) {
      foreach ($arr as $k => $v) {
         foreach ($v as $key => $x) {
            if ($val == $x) $s .= str_repeat('.', $k+1) . ' ' . str_repeat('.', $key+1) . ' ';
         }
      }
   }
   return trim($s);
}


print_r(tap_code_translation("test") . " .... .... . ..... .... ... .... ....
");
print_r(tap_code_translation("total") . " .... .... ... .... .... .... . . ... .
");
print_r(tap_code_translation("break") . " . .. .... .. . ..... . . . ...
");