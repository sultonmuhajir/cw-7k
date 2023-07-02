/*
|--------------------------------------------------------------------------
| Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
|--------------------------------------------------------------------------
|
*/

function isSameLanguage(list) {
   let res = []
   for (let i = 0; i < list.length; i++) {
      res.push(list[i].language == list[0].language);
   }
   return res.filter(i => i == false).length == 0;
}


function isSameLanguage(list) {
   return list.every(e => e.language === list[0].language);
}


function isSameLanguage(list) {
   return [...new Set(list.map(el => el['language']))].length === 1
}


function isSameLanguage(list) {
   for (var i = 0; i < list.length; i++) {
      if (list[0].language !== list[i].language) {
         return false;
      }
   }
   return true;
}


const list1 = [{
      firstName: 'Daniel',
      lastName: 'J.',
      country: 'Aruba',
      continent: 'Americas',
      age: 42,
      language: 'JavaScript'
   },
   {
      firstName: 'Kseniya',
      lastName: 'T.',
      country: 'Belarus',
      continent: 'Europe',
      age: 22,
      language: 'JavaScript'
   },
   {
      firstName: 'Hanna',
      lastName: 'L.',
      country: 'Hungary',
      continent: 'Europe',
      age: 65,
      language: 'JavaScript'
   },
];

console.log(isSameLanguage(list1), true);