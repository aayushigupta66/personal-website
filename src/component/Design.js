import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './Design.scss';

// project 1
import img1 from '../img/design/img1.jpg';
import img2 from '../img/design/img2.jpg';
import img3 from '../img/design/img3.jpg';
import img4 from '../img/design/img4.jpg';
import img5 from '../img/design/img5.jpg';

// project 2
import img6 from '../img/design/img6.jpg';
import img7 from '../img/design/img7.jpg';
import img8 from '../img/design/img8.jpg';
import img9 from '../img/design/img9.jpg';
import img10 from '../img/design/img10.jpg';
import img11 from '../img/design/img11.jpg';

// project 3
import future from '../img/design/future.jpg';
import past from '../img/design/past.jpg';

// project 4
import chrysler from '../img/design/chrysler.jpg';
import cover from '../img/design/cover.jpg';

// ui / ux
import coverme1 from '../img/design/coverme1.png';
import coverme2 from '../img/design/coverme2.png';
import coverme3 from '../img/design/coverme3.png';

import opico1 from '../img/design/opico1.png';
import opico2 from '../img/design/opico2.png';
import opico3 from '../img/design/opico3.png';

// ipad graphics 
import graphic1 from '../img/design/graphic1.png';
import graphic2 from '../img/design/graphic2.png';
import graphic3 from '../img/design/graphic3.png';


const images = [

    coverme1,
    coverme2,
    coverme3,

    opico1,
    opico3,
    
    past, 
    future,

    graphic1,
    graphic2, 
    graphic3, 

    img8,
    img9,
    img7,
    img2,

    cover,
    chrysler,
    img6,
    img10,
    img11,
    img1,
    img3,
    img4,
    img5
    
];

const columnsCountBreakPoints = { 250: 1, 750: 2, 900: 3 };


class Work extends Component {
  render() {
    return (
      <>
        <div className="gallery">
            <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
                <Masonry gutter={10}>
                    {images.map((image) => (
                    <div className="item">
                    <a href={image} target="_blank" data-fancybox="gallery">
                      <img className="zoom" src={image}/>
                    </a>
                    </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
      </>
    );
  }
}

export default Work;