import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('lightMode');
  const handleMode = () => {
    if (mode === 'lightMode') {
      setMode('darkMode');
    } else {
      setMode('lightMode');
    }
  };
  return (
    <div className="App">
      <div className={mode}>
        <h1>Ejercicio 2. Lección 2.4</h1>
        <button onClick={handleMode}>Desactivar/Activar "dark mode"</button>
        <p>Tienes activo el {mode}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla nisi dignissimos optio
          earum voluptate ratione consectetur, libero ipsam aspernatur mollitia blanditiis nihil.
          Obcaecati ipsam magni iusto possimus ducimus numquam ea.
        </p>
      </div>
    </div>
  );
}

export default App;
