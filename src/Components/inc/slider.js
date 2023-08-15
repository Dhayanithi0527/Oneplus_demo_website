import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Button } from 'react-bootstrap';
import Image1 from '../images/Sliding/10Timg.jpg';
import Image2 from '../images/Sliding/11R 5G.webp';
import Image3 from '../images/Sliding/oneplus11 5G.webp';

import {Link} from 'react-router-dom'

const ImageCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide" style={{height:'585px'}}
        />
        <Carousel.Caption className='ms-auto' >
            <h4>
                 OnePlus10T    
            </h4>
            <p >
            It is powered by an octa-core Qualcomm Snapdragon 8+ Gen 1 processor.
            </p>
            <Link to='/CartPage'><Button variant='outline-light'>Read More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ms-auto'>
        <img
          className="d-block w-100 " style={{height:'585px'}}
          src={Image2}
          alt="Second slide"
        />
         <Carousel.Caption >
            <h4 >
              OnePlus11R 5G Best Battery Performance
            </h4>
            <p>
            It has a 5,000mAh battery and supports 100W fast charging.
            </p>
            <Link to='/CartPage'><Button variant='outline-light'>Read More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ms-auto'>
        <img
          className="d-block w-100 " style={{height:'585px' }}
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
            <h4 >
            OnePlus 11 5G Marble Odyssey 
             </h4>
            <p>
            It is a region-exclusive colorway edition that showcases the excellence of extreme skill and creativity. 
            </p>
            <Link to='/CartPage'><Button variant='outline-light'>Read More</Button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Item components for additional images */}
    </Carousel>
  );
};

export default ImageCarousel;
