import React, { Component } from 'react';
import './About.scss'
import './Home.scss';

import profile from '../img/profile.jpeg';


class About extends Component {
  render() {
    return (
      <>
        <div className='aboutMe'>
        
        <div className='whiteBlock box'>
          
          {/* <div className='center'>
            <span className='aboutTitle'>ABOUT ME</span>
            <div className='underLine'></div>
          </div> */}
          

          <div> 
            {/* <img className='pfp' src={profile} /> */}
          </div> 

          <div className='paragraph'>
            <div>
              <span className='aboutTitle'>A</span>
              <span className='aboutTitle'>B</span>
              <span className='aboutTitle'>O</span>
              <span className='aboutTitle'>U</span>
              <span className='aboutTitle'>T</span>
       
              <div className='underlinePadding'>
                <span className='underline'>____________________________________________</span>
              </div>
            </div>

            <div className='lines'>
            <span className='fontSize'>Nice to meet you - I'm Aayushi! 👋</span> 
            </div>

            <div className='lines'>
            <span className='fontSize'>I'm a fourth-year Computer Science and Statistics major at the University of Illinois at Urbana-Champaign looking to gain industry experience and apply my problem-solving skills.</span>
            </div>
            
            <div className='lines'>
            <span className='fontSize'>As a frontend developer, I am passionate about tying design decisions to desired outcomes to address the central challenge of creating good user experiences. I am always hungry to learn and improve and love seeking new challenges to continue to develop my skillset. </span>
            </div>
          </div>

           

        </div>
      </div>  
          
      </>
    );
  }
}

export default About;