/*
|--------------------------------------------------------------------------
| Thinkful - String Drills: Quotable
|--------------------------------------------------------------------------
|
*/

function quotable(name, quote) {
   return `${name} said: "${quote}"`;
}


const quotable = (_, __) => `${_} said: "${__}"`


const quotable = (name, quote) => name + " said: \"" + quote + "\""


const quotable = (name, quote) => {
   return '[name] said: "[quote]"'.replace('[name]', name).replace('[quote]', quote);
}


function quotable(name, quote) {
   return name + ` said: ` + `"` + quote + `"`;
}


console.log(quotable('Grae', 'Practice makes perfect'), 'Grae said: "Practice makes perfect"')
console.log(quotable('Dan', 'Get back to work, Grae'), 'Dan said: "Get back to work, Grae"')
console.log(quotable('Alex', 'Ruby is great fun'), 'Alex said: "Ruby is great fun"')