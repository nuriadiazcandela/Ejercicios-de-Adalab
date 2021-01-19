import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonClicked}>Click</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}
export default Counter;
