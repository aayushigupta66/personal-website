import React, { useState, setState, Component } from 'react';
import './main.scss';
import pdf from './resume.pdf';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';

import Button from '@material-ui/core/Button';

function App() {

  const [page, setPage] = useState('home');

  const returnPage = () => {
    switch(page) {
      case 'home':
        return <Home />;
      case 'about': 
        return <About />;
    }
  }

  return (
    <div className='App'>
      {/* navbar */}
      <div className='buttonGroup'>
        <div>
          <button className='aayushiButton'
            onClick={() => { setPage('home') }}>
              AAYUSHI GUPTA
          </button>
        </div>
        <div>
          <Button className='button'
            onClick={() => { setPage('about') }}>
              WORK
          </Button>
          <Button className='button'
            onClick={() => { setPage('about') }}>
              ABOUT
          </Button>
        </div>
        
      </div>
      
      {/* redirect pages */}
      {returnPage()}
    </div>

  );
}

export default App;
