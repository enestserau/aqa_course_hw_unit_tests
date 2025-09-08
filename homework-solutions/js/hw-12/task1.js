/* Task 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию,
которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds */
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

console.log('Запуск delayTwoSeconds...');
delayTwoSeconds(() => {
  console.log('Коллбэк выполнился через 2 секунды!');
});

/* Task 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. 
Обработайте промис методом .then и выведите результат его резолва в консоль */
const resolvedPromise = new Promise((resolve) => {
  resolve(1);
});

resolvedPromise.then((result) => {
  console.log('Результат resolvedPromise:', result);
});

/* Task 3. Создайте переменную, в которую присвоите новый промис.
Промис должен реджектаться с "Promise failed".
Обработайте промис методом .catch и выведите результат его резолва в консоль
*/
const rejectedPromise = new Promise((resolve, reject) => {
  reject('Promise failed');
});

rejectedPromise.catch((error) => {
  console.log('Ошибка rejectedPromise:', error);
});

/* Task 4. Создайте функцию promiseNumber, принимающую на вход число.
Функция должна возвращать промис, резолвающий это число.
*/
function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

/* Tasks 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), 
обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then 
*/
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1} resolved with:`, result);
  });
});

/* Task 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
 */
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  console.log('\nPromise.allSettled results:');
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1} - Status: ${result.status}, Values: ${result.value}`);
  });
});

// Task 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function asyncPromiseAll() {
  try {
    const results = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}: ${result}`);
    });
  } catch (error) {
    console.error('Error in asyncPromiseAll:', error);
  }
}

asyncPromiseAll();

async function asyncPromiseAllSettled() {
  try {
    const results = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1} - Status: ${result.status}, Value: ${result.value}`);
    });
  } catch (error) {
    console.error('Error in asyncPromiseAllSettled:', error);
  }
}

asyncPromiseAllSettled();
