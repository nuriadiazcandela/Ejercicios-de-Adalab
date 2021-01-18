import React from 'react';
import '../stylesheet/App.css';
import Clock from './Clock';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Clock />
      </div>
    );
  }
}

export default App;
