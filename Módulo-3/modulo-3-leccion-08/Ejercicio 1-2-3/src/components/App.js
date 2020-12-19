import React from 'react';
import '../stylesheet/App.scss';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };

    this.handleFormInfo = this.handleFormInfo.bind(this);
  }

  handleFormInfo(data) {
    this.setState({ user: data });
  }

  render() {
    return (
      <div className="App">
        <Form></Form>
      </div>
    );
  }
}

export default App;
