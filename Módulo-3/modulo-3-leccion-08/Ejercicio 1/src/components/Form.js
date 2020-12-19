import React from 'react';


class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" value={this.state.name} onChange={this.handleChange} />
        <input type="submit" value="Enviar" />
        <label htmlFor="name">Descripción:</label>
        <textarea
          name="description"
          id="description"
          placeholder="Descripción"
          cols="30"
          rows="10"
        ></textarea>
        <select className="languages" name="select">
          <option value="Español">Elige un idioma</option>
          <option value="Español">Español</option>
          <option value="Inglés">Inglés</option>
          <option value="Aleman">Aleman </option>
        </select>
      </form>
    );
  }
}

export default Form;
