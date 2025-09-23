/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
  for (const [key, val] of Object.entries(obj)) {
    if (val === value) {
      return key as keyof T;
    }
  }
  return undefined;
}

const numbers = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
};

console.log(getKeyByValue(numbers, 2));
console.log(getKeyByValue(numbers, 5));
