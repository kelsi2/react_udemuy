# Indecision App

- JSX === JavaScript XML
  - A way of defining templates and incorporating data
  * An extension of JS which makes React easy to use, no need for a lot of new syntax
  * Needs to compile down to JS instead of JSX using Babel

```js
// When compiled with Babel this line:
var template = <p>This is JSX from app.js!</p>;

// Becomes this so the browser can read it:
var template = React.createElement(
  'p',
  null,
  'This is JSX from app.js!';
)
// 1st arg is the type of element, 2nd arg is an id, 3rd arg is the content to be rendered
```

- src/app.js is where we write our JSX, scripts/app.js is where the compiled code lives
- Using Babel to compile we run this command: babel src/app.js --out-file=public/scripts/app.js --presets=env,react
  - This tells Babel to take whatever is in src/app.js and translate the JSX then store it in public/scripts/app.js
  - We are also telling it to use env and React presets, otherwise it won't know what to do with our React code

* By adding --watch to the above command it will keep compiling in the background so we don't need to run the command continually

* Important to install node-modules locally because it will change depending on the version of npm/yarn and the OS running it

* When using Babel we need to use a wrapping div as a parent element (not fragments)

* Curly braces denote JS expressions which render dynamic information

  - We can render not only static data like variables but we can also us methods like string concatenation or toUpperCase

* If we just try to render an object React will fail, we need to access a value within the object for it to work

* Functional logic like conditionals should not be done in a JS expression, it should be extracted into a separate function then called within the expression

* JSX ignores values like true/false/null, nothing gets rendered

  - This can be very helpful for ternary operators and conditional rendering: If we say true && something.... it will render whatever is after the && BUT if we say false and something..... it will return false! E.g. nothing will be rendered!

* Some HTML keywords, like class, are reserved keywords in JS so needed to be changed (this is why we use className)

  - See HTML elements in React docs for more info

* We can use a JS expression to set an id, className, onClick, etc. (this is helpful for event listeners when we need to run a function)

  - See Synthetic Events React docs for possible events

* JSX doesn't have builtin data binding! This is why we need a useState hook to force a render when the state is updated

  - On initial render it just processes the code as it stands when it gets to ReactDOM.render (e.g. if count is 0, that is what will be rendered and that is how it will stay regardless of what happens when our function runs because we aren't telling it to render again unless we use a state hook)

  * When we run render React calculates the minimum number of elements that actually need to be rendered and doesn't render anything else

* When we render an array in JSX it is being broken into individual JS expressions, e.g. if we render {[99, 98, 97]} it will show as {99} {98} {97}
  - We can also render an array including HTML tags such as {[<p>a</p>, <p>b</p>, <p>c</p>]} will render as a b c on new lines, however this will cause an error asking for a unique key prop -> This error means that react will render all of these elements at once because it has no way of differentiating them
    - Fix this by adding keys to each element: {[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p>]}

## Classes

- When we define a class we need to define a constructor for any data we want the class to store (e.g. if we want to pass in a name as a param, we need to define that in the constructor or the data will be lost)
  - 'this' inside a class refers to the class itself, the constructor doesn't have its own scope (it borrows from the parent scope)
  - If you choose to not pass in a param from the constructor when instantiating a class instance, that data will be undefined (e.g. it is not required to pass those pieces in but the data will be undefined)
    - One way to avoid this is to assign a default value for any params in the constructor (e.g. name = 'Anonymous' will assign anonymous if a name isn't passed in when the class is instantiated)

## React Components

- We need to extend classes by React.Component to inherit all of the functionality of the React class, this will bring in all the methods and properties from React

* React components are reusable and can be rendered as many times as needed
* Using uppercase letters for components is important because it allows React to understand what we are trying to render (e.g. header will render as a string since it is an HTML element, so our component won't render. If we use Header React knows to reference the class we are rendering)
* Event handlers are set up as class methods

* Need to use bind to make sure this is using the correct context (e.g. our methods don't have access to the class context so this will cause an error unless we use bind)
  - See constructor for Options class, we are overriding the constructor for React.Component and binding this to the method context

## Stateless Functional Components

- Don't allow for state but really good for simple components (not necessary to use a class when we could use a function)
  - Using functions make the app faster so it's good to use both in combination to simplify

* Default props can be passed in, these will be used if no value is passed in
  - This makes our components more flexible and allows props to be optional for pages that don't need that info

## Lifecycle Methods

- Only accessible in class methods, not functional components (this is part of why functions are faster)

* componentDidMount will run when the component is first mounted to the DOM
* componentDidUpdate will run whenever the component updates (state or props change)
  - It is important to use conditionals to make sure there is actually data being changed (e.g. without any check if we click remove all the method will fire, even if the array is already empty)
* componentWillUnmount runs when a component will go away (it hasn't gone away yet), not used often
  - This will mainly be fired if we switch pages and render a new component
* See React Component Lifecycle docs for more info
* render and constructor are also lifecycle methods

## WebPack

- Webpack allows us to organize js in one file (it bundles everything including dependencies and application code, everything the code needs to run)
  - This eliminates the need for a lot of script tags that slow down the site
  - Files are broken into small islands that can communicate using import/export

* With Webpack rather than having everything in the public folder and being rendered by index.html (react.js, react-dom.js, utils.js, app.js), our dependencies, code, and rendering are split into individual folders and files:
  - node_modules/ contains dependencies react.js and react-dom.js
  - src/ contains code to be rendered app.js and utils.js
  - public/ contains bundle.js (dependencies and app code in one file) which is rendered by index.html (also in public folder)
* Webpack can run babel for us
* This allows us to break code into multiple smaller files so the code isn't as overwhelming

* Webpack config files are node.js files
  - This needs to be included for webpack to run, and must include an entry and output path
* Imported files run first then the actual entry file

  - We need to explicitly export functions from the file to use them elsewhere since each file has its own scope
    - Can use a single default export or multiple named exports

  * You can import only certain functions from a file, only pull in what you need
  * If using named exports/imports the names need to be exactly the same
  * Default imports need to be imported without curly braces
  * Don't need to use the exact name for default exports, we can call it anything we want when importing
  * Export default can't be used inline but we can instead just define an unnamed function (e.g. export default (a, b) => a - b)

* Webpack loader is used to run the bundle through babel to compile jsx to js or scss to css (see module in webpack config)
  - Without this we would have to use React.createElement calls in our js instead of just using render normally
* Important to use a source map (defined with devtool in webpack config) so you know where errors are occurring instead of getting a random bundle reference

* Using class properties from Babel we can define properties without needing a constructor first
  - We also eliminate the need to bind this because we can now use functions (instead of methods) inside of classes. Functions have their own this binding (it is always bound to the class instance) so we don't need a constructor to bind this anymore

## Using Third Party Components

- We can pass in jsx as props.children:

```js
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

ReactDOM.render(
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page</p>
    </div>
  </Layout>,
  document.getElementById("app")
);
```

## Styling React

- Using SCSS for styling, styles.scss will act similar to app.js, it is where we will import all the other styles files
  - We are using partials to import which are denoted with an underscore before the name (it contains part of the styles, not the whole thing)

* rem is better for accessibility than px, allows users to customize font sizes on their end depending on preferences
  - 1 rem is 16px by default. To make rems easier to work with we can set html font-size to 62.5% which will make the default rem size 10px. The math is then much easier
  * Use 1.6rem on the body to make sure default font size balances out
