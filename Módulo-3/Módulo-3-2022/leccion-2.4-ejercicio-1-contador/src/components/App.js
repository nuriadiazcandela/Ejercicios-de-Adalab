import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleClickNumber = () => {
    setCount(count + 1);
  };
  const handleClickReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <h1>Ejercicio 1. Lección 2.4</h1>
      <button onClick={handleClickNumber}>+ 1</button>
      <button onClick={handleClickReset}>Reset</button>
      <h2>Contador: {count}</h2>
    </div>
  );
}

export default App;
