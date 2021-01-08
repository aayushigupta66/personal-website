import React, { useState, setState, Component } from 'react';
import './main.scss';
import pdf from './resume.pdf';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

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

  const [progress, setProgress] = useState(0)

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
          <Navbar.Brand className='aayushiButton' href="/home" onClick={() => { setProgress(100); }}>AAYUSHI GUPTA</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav>
              <Nav.Link className='button' href="/work" onClick={() => { setProgress(100); }}>WORK</Nav.Link>
              <Nav.Link className='button' href="/design" onClick={() => { setProgress(100); }}>DESIGN</Nav.Link>
              <Nav.Link className='button' href="/about" onClick={() => { setProgress(100); }}>ABOUT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
      
      {/* redirect pages */}
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/work" component={Work} />
        <Route exact path="/design" component={Design} />
        <Route exact path="/about" component={Work} />
      </Switch>
    </div>

  );
}

export default App;
