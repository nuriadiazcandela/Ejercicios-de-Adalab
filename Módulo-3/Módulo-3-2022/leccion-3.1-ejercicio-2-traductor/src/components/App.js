import '../styles/App.css';
import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  function replaceVowels(str) {
    return str.replace(/[aeiou]/gi, 'i');
  }
  const handleTranslate = (ev) => {
    setText(replaceVowels(ev.currentTarget.value));
  };
  return (
    <div className="App">
      <h2>Escribe aquí tus mierdas:</h2>
      <textarea
        name="translate"
        id="translate"
        cols="30"
        rows="10"
        onChange={handleTranslate}
      ></textarea>
      <p>{text}</p>
    </div>
  );
}

export default App;
