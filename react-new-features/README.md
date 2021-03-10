# React Hooks, Context, Fragments and More

- Hook: Function that allows you to use state or lifecycle methods
  - Can use built in hooks or use your own

* useEffect is a combination of componentDidMount and componentDidUpdate

  - Runs when component renders and anytime component state or props are changed

  * We can specify when we want it to run by declaring a dependency array (pass in what state affects the useEffect)
    - Can provide an empty array to only run once on mount
  * Can clean up effects (similar to componentDidUnmount) => code that runs after a component is removed from view

* Reducer function needs to be defined externally before we can use the useReducer hook, this is similar to Redux

  - Pass in reducer function and initial state
  - Returns an object with your state and a dispatch function

* useContext will allow all rendered components to access all of the data passed in as a value (in this case notes and dispatch)

  - This prevents us from needing to pass down props manually through components

* Custom hooks are just functions (just like imported hooks) that take advantage of other React hooks and are named starting with use (not mandatory)
  - These hooks can be reused throughout the application
