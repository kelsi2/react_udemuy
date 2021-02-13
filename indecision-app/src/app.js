console.log('App.js is running!');

const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
}

// JSX - JavaScript XML
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

const user = {
  name: 'Kelsi Proulx',
  age: 31,
  location: 'Vancouver'
};

// var userName = "Kelsi Proulx";
// var userAge = 31;
// var userLocation = 'Vancouver';

// If this returns undefined it just doesn't render, checking the elements tag reveals no element at all if location doesn't exist
function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

// Challenge: build template alone and render
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById('app');

// First variable is the JSX to render, second is where we want to render it (index.html, we are retrieving this with the id)
ReactDOM.render(template, appRoot);