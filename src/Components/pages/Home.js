import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageCarousel from "../inc/slider";
import { Container,Row, Col, Button } from 'react-bootstrap';
import '../css/home.css';
import { Link } from 'react-router-dom';
import Visionmission from './inc/vision_mission';
import Ourservices from './inc/Our_services';

function Home() {
  return (
   <>
    <ImageCarousel/>

    {/* Our Company */}
    <section className='section'>
      <Container>
        <Row>
          <Col className='md-12 text-center'>
            <h1 className='company_name p-10px ' style={{color:'orange'}}>Our Company</h1>
            <p > One+: Your gateway to next-level electronics.
               From cutting-edge mobile devices to immersive headsets and portable Bluetooth speakers,
                we're revolutionizing connectivity and entertainment. 
                With integrity as our compass, innovation as our guide, and customer satisfaction as our goal,
                One+ is reshaping the electronic production landscape for a brighter future.
               Join us on the journey of innovation and excellence.</p>
               <Link to='/About'><Button variant='dark'>Read More</Button></Link>
            </Col>
        </Row>
      </Container>
    </section>

    {/* Vision-Mission Values  */}
    
    <Visionmission/>

    {/* Services */}
    
    <Ourservices/>
   </>

      
  )
}

export default Home