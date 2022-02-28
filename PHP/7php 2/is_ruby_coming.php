<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
|--------------------------------------------------------------------------
|
*/

function is_ruby_coming($a) {
   return count(array_filter($a, fn($i) => $i['language'] == 'Ruby')) > 0;
}


function is_ruby_coming($a) {
   return in_array('Ruby',array_column($a,'language'));
}


function is_ruby_coming($a) {
   foreach($a as $dev){
      if($dev['language'] == 'Ruby')
      return true;
   }
   return false;
}


function is_ruby_coming($a) {
   $rubyDev = array_reduce($a, function($count, $item) {
      return $item["language"] == "Ruby" ? ++$count : $count; 
   }, 0);
   return $rubyDev > 0 ? true : false;
}