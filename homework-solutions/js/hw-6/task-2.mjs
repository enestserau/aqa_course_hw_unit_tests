/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

//1. Test for myPizzasT1

let resultUnique;
let resultNull;

const competitorPizzasLower = competitorPizzas.map(pizza => pizza.toLowerCase());
const uniquePizzasT1 = [];

for (const myPizza of myPizzasT1) {
  if (!competitorPizzasLower.includes(myPizza.toLowerCase())) {
    uniquePizzasT1.push(myPizza);
  }
}

if (uniquePizzasT1.length > 0) {
  resultUnique = uniquePizzasT1;
} else {
  resultNull = null;
}

//2. Test for myPizzasT2

const uniquePizzasT2 = [];

for (const myPizza of myPizzasT2) {
  if (!competitorPizzasLower.includes(myPizza.toLowerCase())) {
    uniquePizzasT2.push(myPizza);
  }
}

if (uniquePizzasT2.length > 0) {
  resultUnique = uniquePizzasT2;
} else {
  resultNull = null;
}

export { resultNull, resultUnique };
