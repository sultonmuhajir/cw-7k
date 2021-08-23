<?php
/*
|--------------------------------------------------------------------------
| Complementary DNA
|--------------------------------------------------------------------------
|
*/

function DNA_strand($dna) {
   $res = "";
   for ($i=0; $i < strlen($dna); $i++) { 
      $res .= ($dna[$i] == 'A' ? 'T' : ($dna[$i] == 'T' ? 'A' : ($dna[$i] == 'G' ? 'C' : 'G')));
   }
   return $res;
}


function DNA_strand($dna) {
   return strtr($dna, 'ACGT', 'TGCA');
}


function DNA_strand($dna) {
   $dna = str_replace(['A', 'T', 'C', 'G'], ['t', 'a', 'g', 'c'], $dna);
   return strtoupper($dna);
}


function DNA_strand($dna) {
   return strtr($dna, ['A'=>'T', 'T'=>'A', 'C'=>'G', 'G'=>'C']);
}


print_r(DNA_strand("AAAA"). " TTTT
");
print_r(DNA_strand("ATTGC"). " TAACG
");
print_r(DNA_strand("GTAT"). " CATA
");