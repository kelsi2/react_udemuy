// 
// Object Destructuring
// 

// const person = {
//   name: 'Kelsi',
//   age: 31,
//   location: {
//     city: 'Burnaby',
//     temp: '-1 degrees'
//   }
// };

// This will destructure the variables from person so we don't need to use person.name and person.age, we can just use name and age
// Can set default values in case the values are not provided in the object, we can still provide an alternative name at the same time
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}.`);

// Doing code like this means we are pulling the same values out of person multiple times, with destructuring we can simplify and make it much easier
// if (person.location.city && person.location.temp) {
//   console.log(`It's ${person.location.temp} in ${person.location.city}.`)
// }

// Can access nested objects easily
// We can rename variables coming off the object if needed
// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// 
// Array Destructuring
// 

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

// This works but we have no idea what these items refer to
// console.log(`You are in ${address[1]}, ${address[2]}.`);

// Unlike objects these names don't exist in the array, we are assigning variables in order of index
// We don't need to create variables for all items, just leave them empty but keep a comma to mark that index (unless it's the last item in the array)
// Can create defaults the same way as objects
const [, city, state = 'New York'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)