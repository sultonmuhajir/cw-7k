<?php
/*
|--------------------------------------------------------------------------
| Driving Licence
|--------------------------------------------------------------------------
|
*/

function driver($data) {
   $birth = explode("-", $data[3]);
   $month = date('m', strtotime($birth[1]));
   $a = substr(strtoupper($data[2]) . "99999", 0, 5) . substr($birth[2], 2, 1);
   $b = $data[4] == "M" ? $month : intval($month) + 50;
   $c = $birth[0] . substr($birth[2], 3, 1) . substr($data[0], 0, 1) . (isset($data[1][0]) ? $data[1][0] : "9") . "9AA";
   return $a . $b . $c;
}


function driver($data) {
   list($firstName, $middleName, $lastName, $birthDate, $sex) = $data;
   $d = date_parse($birthDate);
   return str_pad(strtoupper(substr($lastName, 0, 5)), 5, 9) .
      substr($d["year"], -2, 1) .
      sprintf("%02d", $d["month"] + ($sex == "M" ? 0 : 50)) . 
      sprintf("%02d", $d["day"]) . 
      substr($d["year"], -1) . 
      str_pad($firstName[0] . $middleName[0], 2, 9) . 
      "9AA";
}


function driver($data) {
   list($first, $middle, $last, $birth, $sex) = $data;
   $res = str_pad(substr($last, 0, 5), 5, '9');
   $date = explode('-', $birth);
   $res .= $date[2][2];
   $res .= str_pad(date('n', strtotime($birth)) + ($sex == 'F' ? 50 : 0), 2, 0, STR_PAD_LEFT);
   $res .= date('d', strtotime($birth));
   $res .= $date[2][3];
   $res .= $first[0] . ($middle ? $middle[0] : '9');
   $res .= '9AA';
   return strtoupper($res);
}


print_r(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"]) . " GIBBS862131J99AA
");
print_r(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"]) . " LEE99809021AR9AA
");