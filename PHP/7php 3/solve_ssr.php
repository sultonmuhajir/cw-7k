<?php
/*
|--------------------------------------------------------------------------
| Simple string reversal
|--------------------------------------------------------------------------
|
*/

function solve(string $s): string {
   $res = str_split(str_replace(" ", "", strrev($s)));
   foreach (str_split($s) as $k => $v)
      if ($v == " ") array_splice($res, $k, 0, [" "]);
   return implode($res);
}


function solve(string $s): string {
   $result = str_replace(' ','',strrev($s));
   foreach(str_split($s) as $i=>$c) 
      if($c==' ')
         $result = substr($result,0,$i).' '.substr($result,$i);
   return $result;
}


function solve(string $s): string {
   $sArr = explode(' ', $s);
   $sRep = strrev(str_replace(' ', '', $s));
   foreach($sArr as &$sRow){
      $sLen = strlen($sRow);
      $sRow = substr($sRep, 0, $sLen);
      $sRep = substr($sRep, $sLen);
   }
   return implode(' ', $sArr);
}


print_r(solve("codewars") . " srawedoc
");
print_r(solve("your code") . " edoc ruoy
");
print_r(solve("your code rocks") . " skco redo cruoy
");
print_r(solve("i love codewars") . " s rawe docevoli
");