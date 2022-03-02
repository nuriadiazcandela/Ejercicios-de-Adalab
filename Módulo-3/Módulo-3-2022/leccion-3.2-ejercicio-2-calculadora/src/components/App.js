import { useState } from 'react';

const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('');

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };

  const getTotal = (ev) => {
    let total = '';
    if (operation === 'suma') {
      total = parseInt(numberA) + parseInt(numberB);
    } else if (operation === 'resta') {
      total = parseInt(numberA) - parseInt(numberB);
    } else if (operation === 'multiplicacion') {
      total = parseInt(numberA) * parseInt(numberB);
    } else if (operation === 'division') {
      total = parseInt(numberA) / parseInt(numberB);
    }
    return total;
  };

  const handleReset = (ev) => {
    setNumberA(0);
    setNumberB(0);
    setOperation('suma');
    getTotal();
  };

  const handleSelect = (ev) => {
    setOperation(ev.target.value);
    getTotal();
  };

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <select name="operations" id="operations" value={operation} onChange={handleSelect}>
          <option value="suma">Suma</option>
          <option value="resta">Resta</option>
          <option value="multiplicacion">Multiplicar</option>
          <option value="division">Dividir</option>
        </select>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} value={numberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} value={numberB} />
        </label>
      </form>
      <p>
        La {operation} de <strong>{numberA}</strong> y <strong>{numberB}</strong> es
        <strong> {getTotal()}</strong>.
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default App;
