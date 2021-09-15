import logo from './logo.svg';
import Home from './pages/devscholl'
import React, { useRef } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 /// teste  aqui
// teste 2

import './App.css';
import Faixa1 from './pages/devscholl/containe1.js';
import Faixa2 from './pages/devscholl/containe2.js';
function App() {
  const ref = useRef(null)
  return (
    <div className='finale'>
      <ToastContainer />
      <Faixa1 />
      <Faixa2 />
    </div>
  );
}

export default App;
