import React from 'react'
import { Container,Row, Col } from 'react-bootstrap';

function Visionmission() {
  return (
    <section className='section2 mt-5 ' style={{backgroundColor:'lightgray'}}>
        <Container>
        <Row>
            <Col className='md-12 text-center'>
            <h1 className='company_name' style={{color:'orange'}}>Vision,Mission and Values</h1>

            </Col>
        </Row>
        <Row >
            <Col className='md-4 text-center '>
            <h3 className='p-3'>Vision</h3>
            <p>
                Our vision is to become a globally recognized symbol of innovation, reliability, and user-centric design.
                We envision a world where seamless connectivity and immersive experiences are the norm, and
                where One+ stands as the embodiment of technological advancement and consumer satisfaction.
                </p>
            </Col>
            <Col className='md-4 text-center'>
            <h3 className='p-3'>
                Mission
            </h3>
            <p>
                Our mission at One+ is to revolutionize the way people connect and experience the digital world. 
                Through relentless innovation, uncompromising quality, and a customer-centric approach,
                we strive to empower individuals with groundbreaking electronic solutions that enrich their lives.
            </p>
            </Col>
            <Col className='md-4 text-center'>
            <h3 className='p-3'>
                Values
            </h3>
            <p>
                At One+, integrity drives our innovation, ensuring transparent, ethical practices. 
                We thrive on diverse perspectives, fostering a collaborative, inclusive environment where bold ideas flourish.
                Our commitment to excellence fuels our mission, delivering electronics that redefine possibilities.
            </p>
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Visionmission