import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './About.scss'

import img4 from '../img/img4.png';

import gif from '../img/about/bhangra.gif';

import bhangra1 from '../img/about/bhangra1.jpg';
import bhangra2 from '../img/about/bhangra2.jpg';

import travel1 from '../img/about/travel1.JPG';
import travel2 from '../img/about/travel2.JPG';
import travel3 from '../img/about/travel3.JPG';
import travel4 from '../img/about/travel4.JPG';
import travel5 from '../img/about/travel5.JPG';
import travel6 from '../img/about/travel6.JPG';
import travel7 from '../img/about/travel7.JPG';
import travel8 from '../img/about/travel8.JPG';




const email = "aayushigupta66@gmail.com";

const images = [
    
    
    travel4,
    travel1,
    travel5,

    bhangra1,
    bhangra2,
    gif,

    travel2,
    travel6,
    travel7,
    travel8,
    

    
    
];

const columnsCountBreakPoints = { 250: 1, 750: 2, 900: 3 };

class About extends Component {
  render() {
    return (
      <>
      <div class="container">
        <div class="row">
          <div class="col-md colPadding">
            <img src={img4} className="profile"/>
            
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
              When I am not coding or designing, I like to spend my free time dancing or doing outdoor activities such as hiking or skiing. I am a dancer on my university's collegiate competitive dance team - Illini Bhangra. Bhangra is an energetic folk dance that originated from Punjab, India. I believe that a picture is worth a thousand words, so I've shared some of my favorites below! 
              </span>
            </div>


            {/* <img src={gif} alt="loading..." className="gif"/> */}

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

            <div className="aboutGallery">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry gutter={10}>
                    {images.map((image) => (
                    <div className="item">
                    {/* <a href={image} target="_blank" data-fancybox="gallery"> */}
                      <img className="zoom" src={image}/>
                    {/* </a> */}
                    </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            </div>

      </>
    );
  }
}

export default About;