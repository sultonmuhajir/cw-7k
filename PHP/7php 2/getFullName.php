<?php
/*
|--------------------------------------------------------------------------
| FIXME: Get Full Name
|--------------------------------------------------------------------------
|
*/

class Dinglemouse {
   public function __construct($firstName, $lastName) {
      $this->firstName = $firstName;
      $this->lastName = $lastName;
   }
   public function getFullName() {
     return trim("{$this->firstName} {$this->lastName}");
   }
}


class Dinglemouse {
   public function __construct($firstName, $lastName) {
      $this->firstName = $firstName;
      $this->lastName = $lastName;
   }
   public function getFullName() {
      return trim(sprintf('%s %s', $this->firstName, $this->lastName));
   }
}