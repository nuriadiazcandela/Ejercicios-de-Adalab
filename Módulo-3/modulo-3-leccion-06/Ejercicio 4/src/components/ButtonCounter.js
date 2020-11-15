import React from 'react';
import ButtonCounter from './SheepCounter';

class ButtonCounter extends React.Component {
  render() {
    return <button onClick={this.handleClick}>Más ovejas</button>;
  }
}

export default ButtonCounter;
