import React from 'react';

const Option = (props) => (
  <div className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    <button 
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      Remove
    </button>
  </div>
)


// It's better to use this form of exporting when dealing with functions because we can't do it inline unless we remove the name...this will mess up React devtools which will no longer know the name of the component even though it is named in the import, it will show as Unknown component
export default Option;