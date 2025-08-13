/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arr) {
  return [].concat(...arr);
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (typeof sentence !== 'string' || sentence.length === 0) return '';

  const words = sentence.trim().split(/\s+/);
  if (words.length === 0) return '';

  const firstNorm = words[0].toLowerCase();
  const restNorm = [];

  for (let i = 1; i < words.length; i++) {
    const lower = words[i].toLowerCase();
    restNorm.push(lower.charAt(0).toUpperCase() + lower.slice(1));
  }

  return [firstNorm, ...restNorm].join('_');
}
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }

  return b;
}

export { mergeArrays, fibonacci, devideBy };
