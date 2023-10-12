<?php
/*
|--------------------------------------------------------------------------
| Uglify Word
|--------------------------------------------------------------------------
|
*/

function uglify_word($str) {
   return preg_replace_callback('/[a-zA-Z]+/', function ($matches) {
      $word = $matches[0];
      $result = '';
      for ($i = 0; $i < strlen($word); $i++) {
         $result .= ($i % 2 === 0) ? strtoupper($word[$i]) : strtolower($word[$i]);
      }
      return $result;
   }, $str);
}


function uglify_word($str) {
	$S=0;
	return preg_replace_callback('/./',function($V)use(&$S){
      return(($S=0<preg_match('/[A-Z]/i',$V[0])?!$S:0)?'strtoupper':'strtolower')($V[0]);
   },$str);
}


function uglify_word($str) {
   $flag = 1; $res = '';
   foreach(str_split($str) as $char){
      $flag = !ctype_alpha($char) ? 1 : !$flag;
      $res .= $flag ? strtolower($char) : strtoupper($char);
   }
   return $res;
}


print_r(uglify_word("AAA") . " AaA
");
print_r(uglify_word("BbB") . " BbB
");
print_r(uglify_word("AaA-BbB-CcC") . " AaA-BbB-CcC
");
print_r(uglify_word("EeEe-FfFf-GgGg") . " EeEe-FfFf-GgGg
");
print_r(uglify_word("Hello World") . " HeLlO WoRlD
");