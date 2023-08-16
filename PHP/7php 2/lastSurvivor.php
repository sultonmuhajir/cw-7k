<?php
/*
|--------------------------------------------------------------------------
| Last Survivor
|--------------------------------------------------------------------------
|
*/

function lastSurvivor($letters, $coords) {
   foreach ($coords as $i) {
      $letters = substr($letters, 0, $i) . substr($letters, $i + 1);
   }
   return $letters;
}


function lastSurvivor(string $letters, array $coords): string {
   return array_reduce($coords, fn($c, $e) => substr_replace($c, "", $e, 1), $letters);
}


function lastSurvivor(string $letters, array $coords): string {
   foreach ($coords as $char) {
      $letters = substr_replace($letters, "", $char, 1);
   }
   return $letters;
}