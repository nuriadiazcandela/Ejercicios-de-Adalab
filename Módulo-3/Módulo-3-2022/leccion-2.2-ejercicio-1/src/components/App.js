import '../styles/App.css';

const App = () => {
  const handleInput = (ev) => {
    ev.preventDefault();
    console.log('La última tecla pulsada es: ', ev.key);
  };
  return (
    <div className="App">
      <h1>Ejercicio 1 Lección 2.2</h1>
      <form>
        <input type="text" onKeyUp={handleInput} />
      </form>
    </div>
  );
};

export default App;
