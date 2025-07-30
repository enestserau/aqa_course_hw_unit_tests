/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

let minAge = 18;
let maxAge = 60;
let age = "59";

if (typeof(age) === "string") {
  age = Number(age);
}

if (typeof(age) !== "number") {
  console.log("Incorrect data type");
} else if (age < minAge) {
  console.log("You don't have access cause your age is " + age + " It's less then " + minAge);
} else if (age <= maxAge && age >= minAge) {
  console.log("Welcome");
} else if (age > maxAge) {
  console.log("Keep calm and watch culture channel");
} else
  console.log("Technical work");
