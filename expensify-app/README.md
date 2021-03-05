# Expensify App

Building a React e-commerce app.

## React Router

- Using React Router to navigate separate pages on our app. Provide path and component, if rendering home page use exact to be sure it doesn't show up on all pages
  - For 404 page, don't provide a path. It will show on any pages that don't match one of our paths
    - In order for this to work we must use Switch (this ensures the router will stop looking for a match once a match is found so it won't render the error page when it has found a match)

* Using Link avoids page refreshes when clicking the link providing SPA behaviour
  - Should still use a tags for external links
* Header component should be placed outside the switch to be rendered on every page
* NavLink has extra props for styling nav links specifically (wouldn't use this for other types of links)
* Using /: means the following info is a dynamic variable, it can match anything that comes after

## Redux

- In simple apps component state can be stored at the top level and pass down, but in apps rendered by React Router there is no parent component to pass props down so state gets more complicated
  - There is no parent to store data for all components, they aren't connected
  - We need to be able to pass props through the application without moving through the entire component tree (this makes them not reusable)
  - Redux allows us to do this, state can be passed to individual components rather than through a parent (Redux creates a global state) so components are truly reusable and can be placed anywhere
- Create a Redux store (this is an object just like a state object), we can then use this data the same way we use state but each component can manage the state however it needs to with no impact on other components

* Actions are objects that get sent to the store (like a list of instructions e.g. walk, stop_walking, sit, work, stop_working)
  - In our playground we have actions to increment, decrement, and reset
  * Use all capitals for action type names
* Action generators are functions that return action objects, all store.dispatch actions can be created in one place
  - Benefits of this include an error if we have a typo (instead of manually defining the dispatch each time where it will just go to the default case instead of giving an error), this also makes our code cleaner because we only call a function instead of creating a new object
* Store === a reducer, they specify how the state changes in response to an action
  - Pure functions (output is determined purely by the input [state and action]), doesn't change based on things happening outside the function scope or impact anything happening outside of the function scope (e.g. global variables being passed in or changing a global variable within the function)
  - Never change state or action directly, we only return an object with the new state
* We can use combineReducers to create more than one reducer, this is what we need for expensify
* In order to use spread syntax for objects we need to add support to babelrc as a plugin (transform-object-rest-spread)

## Jest

- Need to always have .test.js file extension for Jest to find test suite
- Syntax is test('description of test', () => {code to be tested})

* We want to run jest in watch mode, to run a script this way we need to enter yarn test -- --watch (without the extra -- yarn doesn't know --watch is referring to the script so it doesn't work)
* If testing two objects or arrays use toEqual instead of toBe (objects and arrays can't be tested with ===, this will always return false)

* Using react-test-renderer to test components. This allows us to create snapshots of the component to ensure it renders as expected rather than typing out mock data as we did for actions, reducers, and selectors

  - If the output changes from the snapshot we will know (this test will always pass the first time when the snapshot is created)

  * See the tests/components/**snapshots** folder (automatically generated) to see the test snapshots
  * When we run the test again it will compare what is rendered with what is in the snapshot
  * If we actually want to make changes to the code, we can press 'u' to ensure that the snapshot is updated to match

* Switching over to Enzyme, relatively similar to react-test-renderer but with more features
* Be sure to test components in isolation (e.g. for ExpenseList we need to make sure we test that component without testing ExpenseListItem)

* ExpenseForm test gets more complicated. We are passing in a createdAt moment which will always be different causing the test to fail, so we need to mock that data to make the test pass
  - See tests/**mocks** folder

## Git Commands

- Git init: Create new Git repo
- Git status: View changes to project code
- Git add: Add files to staging area
- Git commit: Creates new commit with files from staging area
- Git log: View recent commits
