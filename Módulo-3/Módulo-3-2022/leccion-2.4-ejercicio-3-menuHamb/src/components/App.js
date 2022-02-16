import '../styles/App.css';
import img_Menu from '../images/lista.png';

import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState('hidden');

  const handleMenuClick = (ev) => {
    ev.preventDefault();
    if (menu === 'hidden') {
      setMenu('noHidden');
    } else {
      setMenu('hidden');
    }
  };

  return (
    <div className="App">
      <header>
        <img src={img_Menu} className="menu" alt="menu hamburguesa" onClick={handleMenuClick}></img>
      </header>
      <div className={menu}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Servicios</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
