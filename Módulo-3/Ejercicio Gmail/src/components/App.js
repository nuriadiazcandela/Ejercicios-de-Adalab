import React from 'react';
import '../stylesheet/App.scss';
import EmailItem from './EmailItem';
import Header from './Header';

class App extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <Header></Header>
        <table class="table">
          <tbody>
            <EmailItem from="Front Fest" subject=" Entradas ya a la venta" time="15:27"></EmailItem>
            <EmailItem
              from=" GitHub"
              subject=" Adalab/project-promo-i Local store #23"
              time="13:51"
            ></EmailItem>
            <EmailItem from=" Node Weekly" subject=" Node news" time="20:41"></EmailItem>
          </tbody>
        </table>
        <div>
          <div class="col2 mt-1 pt-1">
            <div>
              <h2 class="title--meidum">Entradas ya a la venta</h2>
              <h3 class="title--small">
                <span class="text--bold display-inline-block mr-1">Front Fest</span>
                <span class="text-normal display-inline-block">&lt;info@frontfest.org&gt;</span>
              </h3>
            </div>
            <div class="text-align-right">
              <a href="#">
                <button class="fas fa-times-circle form__btn"></button>
              </a>
              <a href="#">
                <button class="fas fa-trash form__btn"></button>
              </a>
            </div>
          </div>

          <p>
            FrontFest es un evento anual y sin ánimo de lucro. Está organizado y gestionado por un
            equipo de voluntarios y voluntarias que pertenecen a la comunidad de desarrollo
            frontend. Celebrado por primera vez en 2017, pretende ser un punto de encuentro a nivel
            nacional, principalmente en castellano, para todas aquellas personas interesadas en las
            tecnologías de frontend, donde compartir experiencias y aprender acerca de las nuevas
            tendencias en el sector. Y por supuesto, acabar divirtiéndose en buena compañía.
          </p>

          <div class="mt-1">
            <button class="form__btn">
              <span class="fas fa-reply"></span>
              Responder
            </button>

            <button class="form__btn">
              <span class="fas fa-reply-all"></span>
              Responder a todos
            </button>

            <button class="form__btn">
              <span class="fas fa-share"></span>
              Reenviar a todos
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
