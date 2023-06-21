<?php
/*
|--------------------------------------------------------------------------
| Linked Lists - Push & BuildOneTwoThree
|--------------------------------------------------------------------------
|
*/

class Node {
   public $data, $next;
   public function __construct($data, $next = NULL) {
     $this->data = $data;
     $this->next = $next;
   }
}


function push($head, $data) {
   return new Node($data, $head);
}


function build_one_two_three() {
   $numbers = [3, 2, 1];
   $head = null;
   foreach ($numbers as $number)  $head = new Node($number, $head);
   return $head;
}