/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

const numbers = [5, 2, 7, 3, 8, 1, 6];

function findMissingNumber(numbers) {
  const n = numbers.length + 1;
  const expected = Array.from({ length: n }, (_, i) => i + 1); // создаем ожидаемый массив по типу [1, 2, ..., N]
  return expected.find((num) => !numbers.includes(num));
}

export { findMissingNumber };
