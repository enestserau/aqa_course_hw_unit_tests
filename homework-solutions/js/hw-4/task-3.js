/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;
let age = "59";

const ageNumber = Number(age);
console.log(age);

if (typeof(ageNumber) !== "number" || isNaN(ageNumber)) {
  console.log("Incorrect data type");
} else
  if (ageNumber < minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else
  if (ageNumber < maxAge && ageNumber >= minAge) {
  console.log("Welcome");
} else
  if (ageNumber >= maxAge) {
  console.log("Keep calm and watch culture channel");
} else (console.log("Technical work"));
