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
