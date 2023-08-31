<?php
/*
|--------------------------------------------------------------------------
| sPoNgEbOb MeMe
|--------------------------------------------------------------------------
|
*/

function sponge_meme($sentence) {
   $res = "";
   for ($i = 0; $i < strlen($sentence); $i++) {
      $res .= $i%2==0 ? strtoupper($sentence[$i]) : strtolower($sentence[$i]);
   }
   return $res;
}


function sponge_meme(string $sentence): string {
   return join(array_map(fn($x,$k)=>$k&1?strtolower($x):strtoupper($x),str_split($sentence),range(0,strlen($sentence))));
}


function sponge_meme(string $sentence): string {
   $res = str_split($sentence);
   foreach($res as $key => $value){
      $res[$key] = $key%2==0 ? strtoupper($value) : strtolower($value);
   };
   return implode('', $res);
}


print_r(sponge_meme("stop Making spongebob Memes!") . " StOp mAkInG SpOnGeBoB MeMeS!");