// Higher Order Component (HOC) - A component (HOC) that renders another component
// Benefits:
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // Need to pass props to the wrapped component or the component won't display properly
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />  
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info.</p>
      )}
    </div>
  );
}

// This will return an alternative version of the Info component that uses the withAdminWarning (HOC) component as a wrapper
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));