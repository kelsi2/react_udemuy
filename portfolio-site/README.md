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
