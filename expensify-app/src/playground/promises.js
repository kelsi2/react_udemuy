// This code is usually provided by Firebase, we use promises with set
// We can only resolve/reject once and can only pass in one piece of data (can use objects for more data)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Kelsi',
    //   age: 31
    // });
    reject('Something went wrong!');
  }, 1500);
});

console.log('before');

// We attach handlers for Firebase promises
promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
});

console.log('after');