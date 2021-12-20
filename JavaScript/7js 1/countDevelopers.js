/*
|--------------------------------------------------------------------------
| Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
|--------------------------------------------------------------------------
|
*/

function countDevelopers(list) {
   return list.filter(i => i.continent == 'Europe' && i.language == 'JavaScript').length
}


function countDevelopers(list) {
   return list.reduce((count, dev) =>
      (dev.continent === 'Europe' && dev.language === 'JavaScript') ?
      count + 1 : count, 0);
}


const countDevelopers = list => (
   list.filter(({
      continent,
      language
   }) => continent === 'Europe' && language === 'JavaScript').length
)


function countDevelopers(list) {
   let count = 0;
   for (let i = 0; i < list.length; i++) {
      if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
         count++;
      }
   }
   return count;
}


let list1 = [{
      firstName: 'Noah',
      lastName: 'M.',
      country: 'Switzerland',
      continent: 'Europe',
      age: 19,
      language: 'JavaScript'
   },
   {
      firstName: 'Maia',
      lastName: 'S.',
      country: 'Tahiti',
      continent: 'Oceania',
      age: 28,
      language: 'JavaScript'
   },
   {
      firstName: 'Shufen',
      lastName: 'L.',
      country: 'Taiwan',
      continent: 'Asia',
      age: 35,
      language: 'HTML'
   },
   {
      firstName: 'Sumayah',
      lastName: 'M.',
      country: 'Tajikistan',
      continent: 'Asia',
      age: 30,
      language: 'CSS'
   }
];

console.log(countDevelopers(list1), 1);