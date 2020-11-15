import React from 'react';
import '../stylesheet/App.scss';
import SheepCounter from './SheepCounter';

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div className="App">
        <SheepCounter></SheepCounter>
        <ButtonCounter></ButtonCounter>
      </div>
    );
  }
}

export default App;
