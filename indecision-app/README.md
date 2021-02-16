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
