let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
}
const minusOne = () => {
  count--;
  renderCounterApp();
}
const reset = () => {
  count = 0;
  renderCounterApp();
}

// const user = {
//   name: 'Kelsi Proulx',
//   age: 31,
//   location: 'Vancouver'
// };

// // var userName = "Kelsi Proulx";
// // var userAge = 31;
// // var userLocation = 'Vancouver';

// // If this returns undefined it just doesn't render, checking the elements tag reveals no element at all if location doesn't exist
// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }

// // Challenge: build template alone and render
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

const renderCounterApp = () => {
  const templateTwo = (
    <div>
    <h1>Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>reset</button>
    </div>
    );
    // First variable is the JSX to render, second is where we want to render it (index.html, we are retrieving this with the id)
    ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();