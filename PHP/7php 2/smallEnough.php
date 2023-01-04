<?php
/*
|--------------------------------------------------------------------------
| Small enough? - Beginner
|--------------------------------------------------------------------------
|
*/

function smallEnough($a, $limit)
{
   return max($a) <= $limit;
}


function smallEnough($a, $limit) {
   sort($a);
   return (end($a) > $limit) ? false : true;
}


function smallEnough($a, $limit)
{
   return max($a) > $limit ? false : true;
}


function smallEnough($a, $limit)
{
   return rsort($a) && $a[0] <= $limit;
}


print_r(smallEnough([66, 101], 200). ' ' . true . '
');
print_r(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100). ' ' . false . '
');
print_r(smallEnough([101, 45, 75, 105, 99, 107], 107). ' ' . true . '
');
print_r(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120). ' ' . true . '
');