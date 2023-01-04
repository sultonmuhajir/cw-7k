<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
|--------------------------------------------------------------------------
|
*/

function is_same_language($a) {
   return count(array_unique(array_map(fn($i) => $i['language'], $a))) == 1;
}


function is_same_language(array $a) {
   return count(array_unique(array_column($a, 'language'))) == 1;
}


function is_same_language($a) {
   for($i=1; $i<count($a); $i++){
      if($a[0]["language"] != $a[$i]["language"]){
         return false;
      }
   }
   return true;
}


print_r(is_same_language(0));