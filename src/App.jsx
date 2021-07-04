import './App.css';
import svg from './images/mobile-note-list-animate.svg';
import app from './images/app.png'
import logo from './images/logo.png'
import caracteristics from './images/Vector8.svg'

function App() {

  const animeted = () => {
    // document.addEventListener('DOMContentLoaded', function () {window.setTimeout(document.querySelector('svg').classList.add('animated'),1000);})
  }
  animeted();


  return (
    <div className="container">
    <div className="circle"></div>
    <div className="circle2"></div>
    <div className="circle3"></div>
    <div className="circle4"></div>
    <div className="circle5"></div>
    <div className="circle6"></div>
    <div className="shape"></div>
    {/* Inicia container */}
    <div className="main">
      <div className="welcome">
      <div className="text-welcome">
      <img src={logo} alt="" />
      <h1>Notorium</h1>
      <h2>Tu app de Productividad</h2>
      </div>
      <img src={app} className="mobile" alt="mobile" />
      {/* <img src={svg} className="svg-list" alt="" /> */}
      </div>
    </div>
    {/* <div className="app-info">
      <div className="caracteristics">
        <img src={caracteristics} className="caracteristics-image" alt="" />
        <h2>Características</h2>
      </div>
    </div> */}
    </div>
  );
}

export default App;
