<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer
|--------------------------------------------------------------------------
|
*/

function get_first_python($a) {
   for ($i = 0; $i < count($a); $i++) {
      if ($a[$i]['language'] == "Python") {
         return $a[$i]['first_name'] . ", " . $a[$i]['country'];
      }
   }
   return "There will be no Python developers";
}


function get_first_python($a) {
   $x = array_search('Python',array_column($a, 'language'));
   return ($x === false) ? 'There will be no Python developers' : $a[$x]['first_name'].', '.$a[$x]['country'];
}


function get_first_python($a) {
   foreach ($a as $dev) {
      if ($dev['language'] === 'Python') {
         return $dev['first_name'] . ', ' . $dev['country'];
      }
   }
   return 'There will be no Python developers';
}


function get_first_python($a) {
   $x = array_values(array_filter($a, function($dev){return $dev['language']=='Python';}));
   return $x ? $x[0]['first_name'].', '.$x[0]['country'] : 'There will be no Python developers';
}