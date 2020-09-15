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
            <span className='intro'>Undergrad student @ UIUC seeking full time job as a frontend developer</span>
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
        <a id='about'>    </a>
        <div className='aboutMe'>
        
          <div className='whiteBlock box'>
            
            <div className='center'>
              <span className='aboutTitle'>ABOUT ME</span>
            </div>

            <div> 
              <img className='pfp' src={profile} />
            </div> 

            <div className='paragraph'>
              

              <div className='lines'>
              <span className='fontSize'>Nice to meet you - I'm Aayushi! 👋</span> 
              </div>

              <div className='lines'>
              <span className='fontSize'>I'm a fourth-year Computer Science and Statistics major at the University of Illinois at Urbana-Champaign looking to gain industry experience and apply my problem-solving skills.</span>
              </div>
              
              <div className='lines'>
              <span className='fontSize'>As a frontend developer, I am passionate about tying design decisions to desired outcomes to address the central challenge of creating good user experiences. </span>
              </div>
            </div>

          </div>
        </div>  

     

        
        </>


      
      
    );
  }
}

export default Work;