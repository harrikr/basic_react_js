import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header.js';
import Navbar from './Navbar.js';
import Variabel from './Variabel.js';

ReactDOM.render(
  <React.StrictMode>
    <Variabel />
    <Header/>
    <Navbar/>  
    
  </React.StrictMode>,
  document.getElementById('root')
);
