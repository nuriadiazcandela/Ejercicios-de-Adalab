import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.sheepArray = [];
    this.html = '';
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      counter: 0,
    };
  }

  handleClick() {
    this.sheepArray.push(this.state.counter);
    this.setState((prevState) => {
      return {
        counter: prevState.counter + 1,
      };
    });
    this.props.getCounter(this.state.counter);
  }

  render() {
    return (
      <>
        <div className="SheepCounter">{this.state.counter + ` ovejas`}</div>
        <button className="btn" onClick={this.handleClick}>
          Contador
        </button>
      </>
    );
  }
}

export default SheepCounter;
