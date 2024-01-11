/*
|--------------------------------------------------------------------------
| Offload your work!
|--------------------------------------------------------------------------
|
*/

function workNeeded(projectMinutes, freelancers) {
   let x = projectMinutes - freelancers.reduce((a, b) => a + b[0] * 60 + b[1], 0);
   return x <= 0 ? "Easy Money!" : `I need to work ${(x / 60) | 0} hour(s) and ${x % 60} minute(s)`;
}


const workNeeded = (p, f) =>
   (p = f.reduce((s, [h, m]) => s - h * 60 - m, p)) <= 0
      ? "Easy Money!"
      : `I need to work ${(p / 60) | 0} hour(s) and ${p % 60} minute(s)`;


function workNeeded(project_minutes, freelancers) {
   let i;
   for (i = 0; i < freelancers.length; i += 1)
      project_minutes -= freelancers[i][0] * 60 + freelancers[i][1];
   return project_minutes <= 0
      ? "Easy Money!"
      : "I need to work " +
           Math.floor(project_minutes / 60) +
           " hour(s) and " +
           String(project_minutes % 60) +
           " minute(s)";
}


console.log(workNeeded(60, [[1, 0]]), "Easy Money!");
console.log(workNeeded(60, [[0, 0]]), "I need to work 1 hour(s) and 0 minute(s)");
console.log(
   workNeeded(141, [
      [1, 55],
      [0, 25],
   ]),
   "I need to work 0 hour(s) and 1 minute(s)"
);