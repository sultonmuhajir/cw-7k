<?php
/*
|--------------------------------------------------------------------------
| Converting 12-hour time to 24-hour time
|--------------------------------------------------------------------------
|
*/

function to24hourtime($hour, $minute, $period) {
   if ($period == "am") $h = ($hour == 12) ? "00" : (($hour < 10) ? "0" . strval($hour) : strval($hour));
   else $h = ($hour == 12) ? "12" : strval($hour + 12);
   $m = ($minute < 10) ? "0" . strval($minute) : strval($minute);
   return $h . $m;
}


function to24hourtime(int $hour, int $minute, string $period): string {
   return sprintf("%02u%02u", $hour % 12 + ($period == 'am' ? 0 : 12), $minute);
}


function to24hourtime(int $hour, int $minute, string $period): string {
   if ($period == 'am' && $hour == 12) {
      $hour = 0;
   } elseif ($period == 'pm' && $hour != 12) {
      $hour = $hour + 12;
   }
   return sprintf('%02d%02d', $hour, $minute);
}


print_r(to24hourtime(1, 0, "am") . " 0100
");
print_r(to24hourtime(1, 0, "pm") . " 1300
");
print_r(to24hourtime(12, 0, "am") . " 0000
");
print_r(to24hourtime(12, 0, "pm") . " 1200
");
print_r(to24hourtime(6, 30, "am") . " 0630
");
print_r(to24hourtime(9, 45, "pm") . " 2145
");