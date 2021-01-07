import React, { Component } from 'react';
import './Home.scss';

import graphic from '../img/graphic.png';
import profile from '../img/circle-cropped.png';
import pdf from '../resume.pdf';

class Work extends Component {
  render() {
    return (
      <>
      <div className='home' >

        {/* landing page */}
        <div className='landing'>
          <span className='hello'>HELLO, </span>
          <span className='name'>I'M AAYUSHI GUPTA.</span>
          <div>
            <span className='position'>SOFTWARE ENGINEER</span>
          </div>
          <div>
            <span className='intro'>Undergrad student @ UIUC seeking a full time job as a frontend developer</span>
          </div>
          <div className='resume'>
            <a className='noLink' href={pdf} target="_blank">
              <button type="button" class="btn btn-outline-light resumeButton" >VIEW RESUME</button>
            </a>
          </div>
        </div>

        <div className='graphicPadding'> 
          <img className='graphic' src={graphic} />
        </div> 

      </div>
      

      
        {/* about me */}
        {/* <a id='about'>    </a> */}
        

     

        
        </>


      
      
    );
  }
}

export default Work;