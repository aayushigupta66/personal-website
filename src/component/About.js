import React, { Component } from 'react';
import './About.scss'

import profile from '../img/profile.jpeg';


class About extends Component {
  render() {
    return (
        <div id='about'>
          {/* <div className='profilePadding'>
           <img src={profile} className='profile' />
          </div>
          <div className='infoPadding'>
          <p className='infoHeader'>ABOUT ME</p>
            <p className='infoBody'>Nice to meet you - I'm Aayushi! 👋</p>
            <p className='infoBody'>I'm a fourth year Computer Science and Statistics major at the University of Illinois at Urbana-Champaign. 
            As a member of the UIUC Data Driven Design Group, I strive to leverage data mining and machine learning to address
            the central challenge of creating good user experiences: tying design decisions to desired outcomes.</p>
          </div> */}
        <div className='infoPadding'>
          <p className='infoBody'>
            Sorry for the inconvenience! Website under construction. 
          </p>
        </div>
          


        </div>
    );
  }
}

export default About;