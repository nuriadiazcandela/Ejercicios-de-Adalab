import foto from './images.jpg';
import './App.scss';

function render() {
  const ResultHtml = (
    <div className="Mediacard">
      <header className="Card-header">
        <img src={foto} className="App-card" alt="foto" />
        <div>
          <h1 className="Card-h1">Alex Guerrero</h1>
          <p>Domingo, 1 de noviembre de 2020</p>
        </div>
      </header>
      <main>
        <p>
          Lorem fistrum la caidita por la gloria de mi madre de la pradera por la gloria de mi madre
          a peich papaar papaar va usté muy cargadoo apetecan está la cosa muy malar. Mamaar te voy
          a borrar el cerito sexuarl está la cosa muy malar tiene musho peligro torpedo. Fistro por
          la gloria de mi madre sexuarl caballo blanco caballo negroorl pecador a gramenawer mamaar
          llevame al sircoo ese pedazo de te voy a borrar el cerito a gramenawer. Pupita a wan
          pupita ahorarr. Ese pedazo de papaar papaar a wan ese pedazo de te va a hasé pupitaa
          quietooor mamaar pecador. Al ataquerl ese que llega pupita fistro la caidita. Ese hombree
          benemeritaar condemor diodeno pecador condemor te va a hasé pupitaa me cago en tus muelas
          diodenoo de la pradera tiene musho peligro.
        </p>
        <p className="heart"> ❤︎</p>
      </main>
    </div>
  );
  return ResultHtml;
}

export default render;
