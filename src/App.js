import React, { useState, setState, Component } from 'react';
import './main.scss';
import pdf from './resume.pdf';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoadingBar from 'react-top-loading-bar'

import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Design from './component/Design';

import Button from '@material-ui/core/Button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  const [page, setPage] = useState('home');
  const [progress, setProgress] = useState(0)

  const returnPage = () => {
    switch(page) {
      case 'home':
        return <Home />;
      case 'about': 
        return <Work />;
      case 'work':
        return <Work />;
      case 'design':
        return <Design />;
    }
  }

  return (
    <div className='App'>
      <a id='home'> </a>
      <LoadingBar
        color="white"
        progress={progress}
        loaderSpeed={10}
        height={4}
        onLoaderFinished={() => { setProgress(0); }}
      />
      {/* navbar */}
        <div className='buttonGroup'>
        <Navbar collapseOnSelect expand="lg" >
          <Navbar.Brand className='aayushiButton' href="#home" onClick={() => { setPage('home'); setProgress(100); }}>AAYUSHI GUPTA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link className='button' href="#work" onClick={() => { setPage('work'); setProgress(100); }}>WORK</Nav.Link>
              <Nav.Link className='button' href="#design" onClick={() => { setPage('design'); setProgress(100); }}>DESIGN</Nav.Link>
              <Nav.Link className='button' eventKey={2} href="#about" onClick={() => { setPage('about'); setProgress(100); }}>ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      
      {/* redirect pages */}
      {returnPage()}
    </div>

  );
}

export default App;
