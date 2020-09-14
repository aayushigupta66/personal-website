import React, { useState, setState, Component } from 'react';
import './main.scss';
import pdf from './resume.pdf';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './component/Home';
import About from './component/About';

import Button from '@material-ui/core/Button';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
        <Navbar collapseOnSelect expand="lg" >
          <Navbar.Brand className='aayushiButton' href="#home" onClick={() => { setPage('home') }}>AAYUSHI GUPTA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link className='button' href="#work" onClick={() => { setPage('about') }}>WORK</Nav.Link>
              <Nav.Link className='button' eventKey={2} href="#about" onClick={() => { setPage('about') }}>ABOUT</Nav.Link>
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
