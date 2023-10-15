<?php
/*
|--------------------------------------------------------------------------
| Alan Partridge I - Partridge Watch
|--------------------------------------------------------------------------
|
*/

function part($arr) {
   $count = 0;
   $x = ["Partridge", "PearTree", "Chat", "Dan", "Toblerone", "Lynn", "AlphaPapa", "Nomad"];
   foreach ($arr as $i) {
      if (in_array($i, $x)) $count += 1;
   }
   return $count != 0
      ? "Mine's a Pint" . str_repeat("!", $count)
      : "Lynn, I've pierced my foot on a spike!!";
}


function part(array $a): string {
   $terms = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
   $count = count(array_intersect($a, $terms));
   return $count ? "Mine's a Pint" . str_repeat("!", $count) : "Lynn, I've pierced my foot on a spike!!";
}


function part(array $a): string {
   $check = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'];
   $count = count(array_filter($a, fn($v) => in_array($v, $check))); 
   return $count >= 1 ?  'Mine\'s a Pint' . str_repeat('!', $count) : 'Lynn, I\'ve pierced my foot on a spike!!';      
}


print_r(part(["Grouse", "Partridge", "Pheasant"]) . " Mine's a Pint!");