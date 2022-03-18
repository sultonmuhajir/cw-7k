<?php
/*
|--------------------------------------------------------------------------
| Band name generator
|--------------------------------------------------------------------------
|
*/

function band_name_generator(string $s): string {
   return $s[0] == $s[-1] ? ucfirst($s) . substr($s, 1) : 'The ' . ucfirst($s);
}


function band_name_generator(string $s): string {
   return ucwords(substr($s, 0, 1) == substr($s, -1) ? $s.substr($s, 1) : 'the '.$s);
}


function band_name_generator(string $s): string {
   return $s[0] === substr($s,-1) ? ucfirst(preg_replace("/{$s[0]}$/",$s, $s)):'The '.ucfirst($s);
}


print_r(band_name_generator('knife') . ' The Knife
');
print_r(band_name_generator('tart') . ' Tartart
');
print_r(band_name_generator('sandles') . ' Sandlesandles
');
print_r(band_name_generator('bed') . ' The Bed
');