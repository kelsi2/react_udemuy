console.log('App.js is running!');

const app = {
  title: 'Indecision app',
  subtitle: 'Put your life in the hands of a computer',
  options: []
}

// We don't want to call the function in the JS expression, we only reference it. Calling it looks for a return value for the function and we don't have one so it would return undefined!
const onFormSubmit = (e) => {
  // Stop full page render, only render the bit where the event is occurring
  e.preventDefault();

  // Target in this case is the form (wherever the event originated)
  // elements are all the elements on the form listed by name, in this case the name of the input is option
  // We then grab the value entered in that input by the user
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
}

const onRemoveAll = () => {
  app.options = [];
  render();
}

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
}

const appRoot = document.getElementById('app');

const render = () => {
  // JSX - JavaScript XML
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}

render();