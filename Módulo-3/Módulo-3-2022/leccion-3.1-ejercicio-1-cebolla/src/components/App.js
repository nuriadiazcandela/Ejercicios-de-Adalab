import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [potato, setPotato] = useState(false);
  const [onion, setOnion] = useState(false);
  const [eggs, setEggs] = useState(false);

  const handleIngredients = (ev) => {
    if (ev.currentTarget.name === 'potato') {
      setPotato(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'eggs') {
      setEggs(ev.currentTarget.checked);
    } else if (ev.currentTarget.name === 'onion') {
      setOnion(ev.currentTarget.checked);
    }
  };

  const showMessage = () => {
    if (potato && eggs && onion) {
      return 'Eres una persona concebollista';
    } else {
      return 'Eres un robot sin paladar';
    }
  };

  return (
    <div>
      <p>Selecciona los ingredientes para tu tortilla de patatas</p>
      <form>
        <label htmlFor="macarrones">
          <input
            type="checkbox"
            id="ingredientM"
            name="pasta"
            value="Macarrones"
            onChange={handleIngredients}
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
          />
          Cerveza
        </label>

        {showMessage()}
      </form>
    </div>
  );
};

export default App;
