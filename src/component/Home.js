import React, { Component } from 'react';
import './Home.scss';

import pdf from '../resume.pdf';
import background from '../background.mp4';

class Work extends Component {
  render() {
    return (
      <div className="home">
        
        <video className="video" autoPlay loop muted>
          <source src={background} type='video/mp4' />
        </video>
        
        <div className="center">
          <div className="text">
            <span className="name">AAYUSHI GUPTA</span>
          </div>
          <div className="text">
            <span className="intro">Undergrad student @ UIUC seeking a full time job as a frontend developer</span>
          </div>

          <div className='text resume'>
            <a className='noLink' href={pdf} target="_blank">
              <button type="button" class="btn btn-outline-light resumeButton" >VIEW RESUME</button>
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Work;