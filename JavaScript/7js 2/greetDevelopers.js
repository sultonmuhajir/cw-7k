/*
|--------------------------------------------------------------------------
| Coding Meetup #2 - Higher-Order Functions Series - Greet developers
|--------------------------------------------------------------------------
|
*/

function greetDevelopers(list) {
   res = [];
   for (let i = 0; i < list.length; i++) {
      list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
      res.push(list[i])
   }
   return res
}


function greetDevelopers(list) {
   list.forEach(function (developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
   });
   return list;
}


function greetDevelopers(list) {
   return list.map(x => Object.assign({}, x, {
      greeting: `Hi ${x.firstName}, what do you like the most about ${x.language}?`
   }))
}


function greetDevelopers(list) {
   return list.map(function (a) {
      a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
      return a;
   });
}


function greetDevelopers(list) {
   for (let i = 0; i < list.length; ++i)
      list[i]['greeting'] = 'Hi ' + list[i].firstName + ', what do you like the most about ' + list[i].language + '?';
   return list;
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
const answer = [{
      firstName: 'Sofia',
      lastName: 'I.',
      country: 'Argentina',
      continent: 'Americas',
      age: 35,
      language: 'Java',
      greeting: 'Hi Sofia, what do you like the most about Java?'
   },
   {
      firstName: 'Lukas',
      lastName: 'X.',
      country: 'Croatia',
      continent: 'Europe',
      age: 35,
      language: 'Python',
      greeting: 'Hi Lukas, what do you like the most about Python?'
   },
   {
      firstName: 'Madison',
      lastName: 'U.',
      country: 'United States',
      continent: 'Americas',
      age: 32,
      language: 'Ruby',
      greeting: 'Hi Madison, what do you like the most about Ruby?'
   }
];
console.log(greetDevelopers(list1), answer);