import React from 'react';

class Fruits extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fruits: ['platanos', 'fresas'] };
    this.handleAddFruit = this.handleAddFruit.bind(this);
  }
  handleAddFruit(ev) {
    ev.preventDefault();
    const newFruit = document.querySelector('.input').value;
    this.setState({ fruits: [...this.state.fruits, newFruit] });
  }

  render() {
    const addFruits = this.state.fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    });
    return (
      <div>
        <button onClick={this.handleAddFruit}>Añadir</button>
        <input className="input" type="text" />
        <ul>{addFruits}</ul>
      </div>
    );
  }
}
export default Fruits;
