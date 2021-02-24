import { createStore } from 'redux';

// 
// Actions
// 

// Can use implicit return since we are only returning one thing
// Can pass in our optional increment amount and default to empty object if nothing gets passed in (we will get an error if we don't provide a default)
// const incrementCount = (payload = {}) => ({
//   type: 'INCREMENT',
//   incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// Code can be simplified immensely by using destructuring, we are providing a default so no need to use a ternary
const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// 
// Reducers
// 

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
}

// Setting default state if no state exists
const store = createStore(countReducer);

// This will get called each time the store state changes
const unsubscribe = store.subscribe(() => {
  // This will return whatever the current state is
  console.log(store.getState());
})


// Increment count, use dispatch to send to the store and change the state
// This will allow the store to use action.type to perform some kind of action, in this case add 5 (incrementBy is an optional value but it allows this to be dynamic)
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));

// This will stop subscribe from running wherever we call this
// unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));