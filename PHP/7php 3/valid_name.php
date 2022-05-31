<?php
/*
|--------------------------------------------------------------------------
| Celebrity Baby Names
|--------------------------------------------------------------------------
|
*/

function valid_name($array) {
   if (count($array) == 0) {
      return "You must test at least one name.";
   } else if (count($array) == 1) {
      return "Congratulations, you can choose any name you like!";
   } else {
      $count = 0;
      for ($i = 1; $i < count($array); $i++) {
         if (strtolower($array[$i][0]) == substr(strtolower($array[$i-1]), -1)) {
            $count += 1;
         }
      }
      return $count == count($array) - 1 ? "Congratulations, your baby names are compatible!" : "Back to the drawing board, your baby names are not compatible.";
   }
}


function valid_name($array) {
   $letter = substr(($array[0] ?? "0"), 0, 1);
   foreach ($array as $a) {
      if (substr($a, 0, 1) != $letter) return "Back to the drawing board, your baby names are not compatible.";
      $letter = strtoupper(substr($a, -1));
   }
   return $letter ? (isset($array[1]) ? "Congratulations, your baby names are compatible!" : "Congratulations, you can choose any name you like!") : "You must test at least one name.";
}


print_r(valid_name(["Cruz", "Zuma"]));
print_r(valid_name(["Jaden"]));