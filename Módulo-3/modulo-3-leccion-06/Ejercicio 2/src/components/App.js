import React from 'react';
import '../stylesheet/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: 'blue',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Nuestra función escuchadora del evento click
    let newClass;
    this.setState((prevState, props) => {
      if (prevState.class === 'blue') {
        newClass = 'red';
      } else if (prevState.class === 'red') {
        newClass = 'blue';
      }
      return { class: newClass };
    });
  }

  render() {
    return <div className={this.state.class} onClick={this.handleClick}></div>;
  }
}
export default App;
