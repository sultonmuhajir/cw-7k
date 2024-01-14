<?php
/*
|--------------------------------------------------------------------------
| Offload your work!
|--------------------------------------------------------------------------
|
*/

function workNeeded($projectMinutes, $freelancers) {
   $x = $projectMinutes - array_reduce($freelancers, fn($carry, $item) => $carry + $item[0] * 60 + $item[1], 0);
   return $x <= 0 ? "Easy Money!" : "I need to work " . floor($x / 60) . " hour(s) and " . $x % 60 . " minute(s)";
}


function workNeeded($projectMinutes, $freelancers) {
   foreach ($freelancers as $f) $projectMinutes -= ($f[0]*60 + $f[1]);
   return ($projectMinutes <= 0 ? "Easy Money!" : "I need to work " . floor($projectMinutes / 60) . " hour(s) and " . $projectMinutes % 60 . " minute(s)");
}


function workNeeded($projectMinutes, $freelancers) {
   $m = $projectMinutes - array_sum(array_map(function($f){return $f[0] * 60 + $f[1];}, $freelancers));
   return $m > 0 ? sprintf("I need to work %d hour(s) and %d minute(s)", intval($m / 60), $m % 60) : 'Easy Money!';
}


print_r(workNeeded(60, [[1,0]]) . " Easy Money!
");
print_r(workNeeded(60, [[0,0]]) . " I need to work 1 hour(s) and 0 minute(s)
");
print_r(workNeeded(141, [[1,55], [0,25]]) . " I need to work 0 hour(s) and 1 minute(s)
");