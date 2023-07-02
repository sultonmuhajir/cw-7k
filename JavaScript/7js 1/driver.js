/*
|--------------------------------------------------------------------------
| Driving Licence
|--------------------------------------------------------------------------
|
*/

const moment = require("moment");
function driver(data) {
   let birth = data[3].split("-");
   let month = moment().month(birth[1]).format("MM");
   let a = (data[2].toUpperCase() + "99999").substring(0, 5) + birth[2][2];
   let b = data[4] == "M" ? month : Number(month) + 50;
   let c = birth[0] + birth[2][3] + data[0][0] + (data[1][0] || "9") + "9AA";
   return a + b + c;
}


function driver(data) {
   let birthDay = new Date(data[3]);
   return (
      (data[2].toUpperCase() + "99999").slice(0, 5) + //1-5
      data[3].slice(-2, -1) + //6
      ("0" + (birthDay.getMonth() + (data[4] == "M" ? 1 : 51))).slice(-2) + //7-8
      ("0" + birthDay.getDate()).slice(-2) + //9-10
      data[3].slice(-1) + //11
      data[0].slice(0, 1) + //12
      (data[1] + "9").slice(0, 1) + //13
      "9AA"
   ); //14-16
}


function driver([forename, middle_name, surname, str_birth_date, sex]) {
   let birth_date = new Date(str_birth_date).toJSON();
   return (
      `${surname}99999`.slice(0, 5).toUpperCase() +
      birth_date.replace(
         /^..(.)(.).(.)(.).(..).*$/,
         (_, y3, y4, m1, m2, dd) => y3 + (+m1 + (sex === "M" ? 0 : 5)) + m2 + dd + y4
      ) +
      forename[0] +
      (middle_name ? middle_name[0] : "9") +
      `9AA`
   );
}


console.log(driver(["Johanna", "", "Gibbs", "13-Dec-1981", "F"]), "GIBBS862131J99AA");
console.log(driver(["Andrew", "Robert", "Lee", "02-September-1981", "M"]), "LEE99809021AR9AA");