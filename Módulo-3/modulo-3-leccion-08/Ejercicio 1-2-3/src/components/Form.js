import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      language: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendDatatoApp = this.sendDatatoApp.bind(this);
  }
  handleChange(ev) {
    const target = ev.target;
    const value = target.value;
    const id = target.id;
    this.setState({ [id]: value }, () => {
      this.sendDatatoApp(this.state);
    });
  }
  sendDatatoApp(data) {
    this.props.handleFormInfo(data);
  }
  render() {
    return (
      <form>
        <label htmlFor="name">Nombre de la película:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="name">
          Descripción:
          <textarea
            name="description"
            id="description"
            value={this.state.description}
            onChange={this.handleChange}
          ></textarea>
        </label>
        <label htmlFor="name">
          Idioma:
          <select
            value={this.state.language}
            name="language"
            id="language"
            onChange={this.handleChange}
          >
            <option value="Elige el idioma">Elige el idioma</option>
            <option value="Español">Español</option>
            <option value="Ingles">Inglés</option>
            <option value="Aleman">Alemán</option>
          </select>
        </label>
      </form>
    );
  }
}

export default Form;
