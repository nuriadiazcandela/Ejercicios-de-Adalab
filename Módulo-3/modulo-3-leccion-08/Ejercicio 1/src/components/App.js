import React from 'react';
import '../stylesheet/App.scss';
import Form from './Form';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div>
        <Form></Form>
        <Card></Card>
      </div>
    );
  }
}

export default App;
