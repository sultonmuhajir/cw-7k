<?php
/*
|--------------------------------------------------------------------------
| Composing squared strings
|--------------------------------------------------------------------------
|
*/

function compose($s1, $s2) {
   $x1 = explode("\n", $s1);
   $x2 = explode("\n", $s2);
   $res = [];
   for ($i = 0; $i < count($x1); $i++) {
      $res[] = substr($x1[$i], 0, $i + 1) . substr($x2[count($x2) - $i - 1], 0, count($x2) - $i);
   }
   return implode("\n", $res);
}


function compose($s1, $s2) {
   $a1 = explode("\n", $s1);
   $a2 = array_reverse(explode("\n", $s2));
   return implode("\n", array_map(function ($i, $a, $b) {
      return substr($a, 0, $i + 1) . substr($b, 0, -$i ?: PHP_INT_MAX);
   }, array_keys($a1), $a1, $a2));
}


function compose($s1,$s2){
   $i = $start = 0;
   $arr = explode("\n",$s1."\n".$s2);
   $len = count($arr);
   $end = $len - 1;
   $newStr = '';
   while($i < $len){
      $newStr .= substr($arr[$start],0,$start + 1).substr($arr[$end],0,strlen($arr[$end])-$start)."\n";
      $start++;$end--;
      $i += 2;
   }
   return trim($newStr); 
}


print_r(
   compose("byGt\nhTts\nRTFF\nCnnI", "jIRl\nViBu\nrWOb\nNkTB") . " bNkTB\nhTrWO\nRTFVi\nCnnIj"
);