/*
|--------------------------------------------------------------------------
| Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
|--------------------------------------------------------------------------
|
*/

function isRubyComing(list) {
   let res = [];
   list.forEach(i => {
      res.push(i.language)
   });
   return res.filter(i => i == 'Ruby').length > 0;
}


function isRubyComing(list) {
   return list.some(e => e.language === 'Ruby');
}


function isRubyComing(list) {
   return list.filter(ele => ele.language === 'Ruby').length > 0 ? true : false;
}


function isRubyComing(list) {
   return list.find(x => x.language == 'Ruby') ? true : false;
}


function isRubyComing(list) {
   return JSON.stringify(list).includes('Ruby');
}


const list1 = [{
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java'
   },
   {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python'
   },
   {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby'
   }
];
const list2 = [{
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java'
   },
   {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python'
   }
];
console.log(isRubyComing(list1), true);
console.log(isRubyComing(list2), false);