import React, { useState, setState, Component } from 'react';
import './main.scss';
import pdf from './resume.pdf';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Work from './component/Work';
import About from './component/About';

import Button from '@material-ui/core/Button';

function App() {

  const [page, setPage] = useState('work');

  const returnPage = () => {
    switch(page) {
      case 'work':
        return <Work />;
      case 'about': 
        return <About />;
    }
  }

  return (
    <div className='App'>
      {/* navbar */}
      <div className='buttonGroup'>
        <Button className='aayushiButton'
          onClick={() => { setPage('work') }}>
            AAYUSHI GUPTA
        </Button>
        <Button className='button'
          onClick={() => { setPage('work') }}>
            WORK
        </Button>
        <Button className='button'
          onClick={() => { setPage('about') }}>
            ABOUT
        </Button>
      </div>
      
      {returnPage()}
    </div>

  );
}

export default App;
