import './App.css';
import svg from './images/mobile-note-list-animate.svg';
import app from './images/app.png'
import logo from './images/logo.png'
import characteristics from './images/characteristics.svg'

function App() {

  const animeted = () => {
    // document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})
  }
  animeted();


  return (
    <>
    <div className="shape"></div>
    {/* Inicia container */}
    <section className="welcome">
    <nav>
        <a href="">aa</a>
      </nav>
    <main>
        <div className="text-welcome">
        <h1>Notorium</h1>
        <h2>Tu app de Productividad</h2>
        </div>
        <div className="image-welcome">
        <img src={app} className="mobile" alt="mobile" />
        </div>
    </main>
    </section>
    <section className="app-info">
      <div className="characteristics">
        <div className="characteristics-text">
        <h2>Características</h2>
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
