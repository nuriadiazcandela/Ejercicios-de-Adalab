import React from 'react';
import '../stylesheet/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
    };
    this.handleKeyup = this.handleKeyup.bind(this);
  }
  handleKeyup(event) {
    this.setState({
      inputText: event.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onKeyUp={this.handleKeyup} />
        <p className="result">{this.state.inputText}</p>
      </div>
    );
  }
}

export default App;
