let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderVisible();
}

const appRoot = document.getElementById('app');

const renderVisible = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <div>
          <p>Hey you can see me now!</p>
        </div>
      )}
    </div>
  )
  ReactDOM.render(template, appRoot);
}

renderVisible();