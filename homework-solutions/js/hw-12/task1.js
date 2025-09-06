function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

console.log(delayTwoSeconds());

const promiseResolve = new Promise((resolve) => {
  resolve(1);
});

promiseResolve.then((result) => {
  console.log('Resolved promise result = ', result);
});

const promiseReject = new Promise((rej) => {
  rej('Promise rejected');
});

promiseReject.catch((error) => {
  console.log('Promise reject error : ', error);
});

function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1} resolved with:`, result);
  });
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((results) => {
  console.log('\nPromise.allSettled results:');
  results.forEach((result, index) => {
    console.log(`Promise ${index + 1} - Status: ${result.status}, Values: ${result.value}`);
  });
});
