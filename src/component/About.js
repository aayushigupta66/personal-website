import React, { Component } from 'react';
import './About.scss'

import img4 from '../img/img4.png';

import gif from '../img/bhangra.gif'

const email = "aayushigupta66@gmail.com";

class About extends Component {
  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-md colPadding">
            <img src={img4}/>
            
            <div className="namePadding">
              <span className="nameInfo">A LITTLE BIT ABOUT ME</span>
            </div>

            <div className="infoBodyPadding">
              <span className="">
                Hello! My name is Aayushi! 👋 I'm a fourth-year Computer Science and Statistics major at the University of Illinois at Urbana-Champaign looking to gain industry experience as a frontend developer or a software engineer. 
              </span>
            </div>

            <div className="infoBodyPadding">
              <span className="">
                When I am not coding, I like to spend my free time dancing or travelling. I am a dancer on my univeristy's collegiate competitive dance team - Illini Bhangra. Bhangra is an energetic, folk dance that originated from Punjab, India.
              </span>
            </div>

            <img src={gif} alt="loading..." className="gif"/>

          </div>

          <div class="col-md colPadding">
            
            <div className="namePadding">
              <span className="nameInfo">CAREER GOALS</span>
            </div>

            <div className="infoBodyPadding">
              <span>
                Focus on writing code that will make an impact and make software that is user friendly. Find a place I can grow and continue to expand my skill set.  
              </span>
            </div>

            <div className="infoBodyPadding">
              <span className="">
                I am passionate about tying design decisions to desired outcomes to address the central challenge of creating good user experiences. I am always hungry to learn and improve and love seeking new challenges to continue to develop my skill set.
              </span>
            </div>

            <div className="namePadding">
              <span className="nameInfo">EXPERIENCE</span>
            </div>

            <div className="infoBodyPadding">
              <span className="workInfo">
                SDE Intern @ Amazon
              </span>
              <div>
                <span className="dateInfo">
                  May 2020 - August 2020
                </span>
              </div>
            </div>

            <div className="infoBodyPadding">
              <span className="workInfo">
                iOS Developer @ Opico
              </span>
              <div>
                <span className="dateInfo">
                  April 2019 - March 2020
                </span>
              </div>
            </div>

            <div className="namePadding">
              <span className="nameInfo">LETS CHAT!</span>
            </div>

            <div className="infoBodyPadding">
              <span className="emoji">📩</span>
              <a href={"mailto:" + email}>aayushigupta66@gmail.com</a>
            </div>
            
            <div className="infoBodyPadding">
              <span className="emoji">🤝</span>
              <a href="https://www.linkedin.com/in/aayushigupta66/" target="_blank">linkedin.com/in/aayushigupta66</a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default About;