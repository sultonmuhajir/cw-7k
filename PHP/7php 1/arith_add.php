<?php
/*
|--------------------------------------------------------------------------
| Adding words - Part I
|--------------------------------------------------------------------------
|
*/

class Arith {
   private $number;
   private $arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty"];
   public function __construct($number) {
      $this->number = $number;
   }
   public function add($n) {
      return $this->arr[array_search($n, $this->arr) + array_search($this->number, $this->arr)];
   }
}


class Arith {
   public $set;
   public function __construct ($set) {
      $this->set = $set;
   }
   public function add($string) {
      $convert = ["zero" => 0, "one" => 1, "two" => 2, "three" => 3, "four" => 4, "five" => 5, "six" => 6, "seven" => 7, "eight" => 8, "nine" => 9, "ten" => 10, "eleven" => 11, "twelve" => 12, "thirteen" => 13, "fourteen" => 14, "fifteen" => 15, "sixteen" => 16, "seventeen" => 17, "eighteen" => 18, "nineteen" => 19, "twenty" => 20];
      return array_flip($convert)[$convert[$string] + $convert[$this->set]];
   }
}


print_r(i.add("seven") . " ten
");
print_r(i.add("eight") . " eleven
");
print_r(i.add("zero") . " three
");