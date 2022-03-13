/*
|--------------------------------------------------------------------------
| Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
|--------------------------------------------------------------------------
|
*/

function countLanguages(list) {
   let res = {};
   let lst = [];
   list.forEach(i => {
      lst.push(i.language);
   });
   let key = [...new Set(lst)]
   let val = [];
   key.forEach(x => {
      val.push(lst.filter(i => i == x).length)
   });
   for (let i = 0; i < val.length; i++) {
      res[key[i]] = val[i];
   }
   return res
}


function countLanguages(list) {
   let count = {};
   list.forEach(x => count[x.language] = (count[x.language] || 0) + 1);
   return count;
}


function countLanguages(list) {
   return list.reduce((o, d) => (o[d.language] = o[d.language] + 1 || 1, o), {});
}


function countLanguages(list) {
   let res = {};
   let uniques = list.map(e => e.language);
   for (let el of uniques) {
      res[el] = list.filter(e => e.language === el).length;
   }
   return res;
}


const list1 = [{
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'C'
   },
   {
      firstName: 'Anna',
      lastName: 'R.',
      country: 'Liechtenstein',
      continent: 'Europe',
      age: 52,
      language: 'JavaScript'
   },
   {
      firstName: 'Ramon',
      lastName: 'R.',
      country: 'Paraguay',
      continent: 'Americas',
      age: 29,
      language: 'Ruby'
   },
   {
      firstName: 'George',
      lastName: 'B.',
      country: 'England',
      continent: 'Europe',
      age: 81,
      language: 'C'
   },
];

const answer = {
   C: 2,
   JavaScript: 1,
   Ruby: 1
};

console.log(countLanguages(list1), answer);