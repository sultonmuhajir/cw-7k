<?php
/*
|--------------------------------------------------------------------------
| Coding Meetup #2 - Higher-Order Functions Series - Greet developers
|--------------------------------------------------------------------------
|
*/

function greet_developers($a) {
   for ($i=0; $i < count($a); $i++) { 
      $a[$i]['greeting'] = "Hi {$a[$i]['first_name']}, what do you like the most about {$a[$i]['language']}?";
   }
   return $a;
}


function greet_developers($a) {
   foreach($a as $key => $val){
      $a[$key]['greeting'] = 'Hi '.$val['first_name'].', what do you like the most about '.$val['language'].'?';
   }
   return $a;
}


function greet_developers($a) {
   return array_map(function($v) {
      $v['greeting'] = "Hi {$v['first_name']}, what do you like the most about {$v['language']}?";
      return $v;
   }, $a);
}


function greet_developers($a) {
   foreach ($a as &$p) {
      $p["greeting"] = "Hi " . $p["first_name"] . ", what do you like the most about " . $p["language"] . "?";
   }
   return $a;
}


$list1 = [
   [
      "first_name" => "Sofia",
      "last_name" => "I.",
      "country" => "Argentina",
      "continent" => "Americas",
      "age" => 35,
      "language" => "Java"
   ],
   [
      "first_name" => "Lukas",
      "last_name" => "X.",
      "country" => "Croatia",
      "continent" => "Europe",
      "age" => 35,
      "language" => "Python"
   ],
   [
      "first_name" => "Madison",
      "last_name" => "U.",
      "country" => "United States",
      "continent" => "Americas",
      "age" => 32,
      "language" => "Ruby"
   ]
];
print_r(greet_developers($list1));