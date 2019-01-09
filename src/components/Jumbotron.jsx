import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import './Jumbotron.css';

const slideImages = [
  './images/image1.jpg',
  './images/slide_2.jpeg',
  './images/image1.jpg'
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class Jumbotron extends Component {
  render() {
    return (
      <Slide {...properties}>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            <span>Slide 1</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            <span>Slide 2</span>
          </div>
        </div>
        <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            <span>Slide 3</span>
          </div>
          </div>
      </Slide>
    );
  }
}

export default Jumbotron;
