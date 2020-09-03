import React, { Component } from 'react';
import './Home.scss';

import graphic from '../img/graphic.png';
import pdf from '../resume.pdf';
import Button from '@material-ui/core/Button';

class Work extends Component {
  render() {
    return (
      <div className='home'>

        {/* landing page */}
        <div className='landing'>
          <span className='hello'>HELLO, </span>
          <span className='name'>I'M AAYUSHI GUPTA.</span>
          <div>
            <span className='position'>SOFTWARE ENGINEER</span>
          </div>
          <div>
            <span className='intro'>Undergrad student @ UIUC seeking full time job as a frontend developer</span>
          </div>
          <div className='resume'>
            <a className='noLink' href={pdf} target="_blank">
              <Button variant='outlined' className='resumeButton'>
                VIEW RESUME
              </Button>
            </a>
          </div>
        </div>
        <img className='graphic' src={graphic} />

        {/* work experience */}
        <div>
          

        
        </div>


      </div>
    );
  }
}

export default Work;