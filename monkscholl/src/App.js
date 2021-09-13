import logo from './logo.svg';
import Home from './pages/devscholl'

//import Test from './compenentes/cabecalho.js'
import './App.css';
import Faixa1 from './pages/devscholl/containe1.js';
import Faixa2 from './pages/devscholl/containe2.js';
function App() {
  return (
    <div className='finale'>
      <Faixa1 />
      <Faixa2 />
    </div>
  );
}

export default App;
