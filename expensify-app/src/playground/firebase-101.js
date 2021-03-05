// This will fire when data is removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// This will fire when data is changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// This will fire when data is added BUT will also run with whatever data is currently at that location
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

database.ref('expenses').push({
  description: 'Rent',
  note: '',
  amount: 140000,
  createdAt: 'March 1, 2021'
});

// database.ref('notes/-MV2zb_2ZKwTGSn8tV9P').remove();

// database.ref('notes').push({
//   title: 'COurse Topics',
//   body: 'React Native, Angular, Python' 
// });

// This is how we need to organize arrays since Firebase converts them to objects, basically we are defining a key for what would be in the array (doing the object conversion ahead of time so we can control the keys that are assigned)
// Using .push as above will do this structure automatically
// const firebaseNotes = {
//   notes: {
//     key1: {
//       title: 'First note!',
//       body: 'This is my note'
//     },
//     key2: {
//       title: 'Another note',
//       body: 'This is my note'
//     }
//   }
// };

// const notes = [{
//   id: '12',
//   title: 'First note!',
//   body: 'This is my note'
// }, {
//   id: '761ase',
//   title: 'Another note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();

//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// setTimeout(() => {
//   database.ref().update({
//     name: 'Jessie',
//     'job/title': 'Web Designer',
//     'job/company': 'Uber'
//   })
// }, 3500);

// On allows us to listen for data changes, similar to redux store.subscribe
// We can also use ref().off to remove the subscription, can remove all subscriptions or a specific one by assigning a variable
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(33);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(34);
// }, 10500);

// Once will fetch the data from the database a single time
// database.ref()
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Kelsi Proulx',
//   age: 31,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Burnaby',
//     country: 'Canada'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// Update must be called with an object, the whole point is to update multiple pieces of data
// Can be used to change, add, or remove data
// Need to be careful when updating objects like location. If we only update city for example, country will be removed
// Can use location/city to reference data at a specific object key
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// This will rewrite the data above
// database.ref().set('This is my data.');

// This will NOT just adjust age, this will overwrite ALL of the data
// database.ref('age').set({
//   age: 32
// });

// This will reference the previously set age variable and adjust it, the rest of the data will remain intact
// database.ref('age').set(32);
// Using location/city will reference that key (city) instead of overwriting the whole location object
// database.ref('location/city').set('Vancouver');

// database.ref('attributes').set({
//   height: 61,
//   weight: 130
// }).then(() => {
//   console.log('Second set call worked!');
// }).catch((e) => {
//   console.log('Things didn\'t work for the second call.', e);
// });

// This will do the same thing as remove
// database.ref('isSingle').set(null);

// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Data could not be removed', e);
//   });