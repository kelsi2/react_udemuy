class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && (
          <div>
            <p>You can see me now!</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderVisible();
// }

// const appRoot = document.getElementById('app');

// const renderVisible = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey you can see me now!</p>
//         </div>
//       )}
//     </div>
//   )
//   ReactDOM.render(template, appRoot);
// }

// renderVisible();