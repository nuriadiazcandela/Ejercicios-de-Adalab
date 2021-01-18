import React from 'react';
import './App.css';
import Counter from './Counter';
import Fruits from './Fruits';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Fruits />
      </div>
    );
  }
}

export default App;
