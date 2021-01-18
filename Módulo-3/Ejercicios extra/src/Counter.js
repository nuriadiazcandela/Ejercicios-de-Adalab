import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked() {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.buttonClicked}>Click</button>
        <div>{this.state.value}</div>
      </div>
    );
  }
}
export default Counter;
