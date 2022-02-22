import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [potato, setPotato] = useState(false);
  const [onion, setOnion] = useState(false);
  const [eggs, setEggs] = useState(false);
  const [pasta, setPasta] = useState(false);
  const [beer, setBeer] = useState(false);
  const [nuts, setNuts] = useState(false);

  const handleIngredients = (ev) => {
    if (ev.currentTarget.name === 'potato') {
      setPotato(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'eggs') {
      setEggs(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'onion') {
      setOnion(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'pasta') {
      setPasta(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'nuts') {
      setNuts(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'beer') {
      setBeer(ev.currentTarget.checked);
    }
  };

  const showMessage = () => {
    if (onion && eggs && potato && !pasta && !nuts && !beer) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };

  const handleMark = (ev) => {
    setPotato(true);
    setOnion(true);
    setEggs(true);
    setPasta(true);
    setBeer(true);
    setNuts(true);
  };

  const handleReset = (ev) => {
    setPotato(false);
    setOnion(false);
    setEggs(false);
    setPasta(false);
    setBeer(false);
    setNuts(false);
  };

  return (
    <div>
      <p>Selecciona los ingredientes para tu tortilla de patatas</p>
      <button onClick={handleMark}>Marcar todos</button>
      <button onClick={handleReset}>Desmarcar todos</button>
      <form>
        <label htmlFor="macarrones">
          <input
            type="checkbox"
            id="ingredientM"
            name="pasta"
            value="Macarrones"
            onChange={handleIngredients}
            checked={pasta}
          />
          Macarrones
        </label>

        <label htmlFor="patatas">
          <input
            type="checkbox"
            id="ingredientP"
            name="potato"
            value="Patatas"
            onChange={handleIngredients}
            checked={potato}
          />
          Patatas
        </label>

        <label htmlFor="nueces">
          <input
            type="checkbox"
            id="ingredientN"
            name="nuts"
            value="Nueces"
            onChange={handleIngredients}
            checked={nuts}
          />
          Nueces
        </label>

        <label htmlFor="huevos">
          <input
            type="checkbox"
            id="ingredienH"
            name="eggs"
            value="Huevos"
            onChange={handleIngredients}
            checked={eggs}
          />
          Huevos
        </label>

        <label htmlFor="cebolla">
          <input
            type="checkbox"
            id="ingredientC"
            name="onion"
            value="Cebolla"
            onChange={handleIngredients}
            checked={onion}
          />
          Cebolla
        </label>

        <label htmlFor="cerveza">
          <input
            type="checkbox"
            id="ingredientCerveza"
            name="beer"
            value="Cervez"
            onChange={handleIngredients}
            checked={beer}
          />
          Cerveza
        </label>

        {showMessage()}
      </form>
    </div>
  );
};

export default App;
