import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FaPhone,FaEnvelope,FaMapMarkerAlt  } from 'react-icons/fa';

const Contact = () => {
  
  return (
   
    <div>
        <Container  style={{borderRadius:'10px',boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'}} >
          <Row className="justify-content-center mt-5">
            <Col xs={12} md={8}>
              <h1>CONTACT US</h1>
              <p>Enter your message to reach out</p>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formName">
                  <Form.Label>Phone number</Form.Label>
                  <Form.Control type="text" placeholder="Enter your number" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Comment or Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                </Form.Group>

                <Button variant="outline-dark" type="submit" style={{ marginTop: '20px',width:"100%" }}>
                  Submit
                </Button>
                <hr style={{ margin: '20px 0' }} />

                <Row>
                  <Col xs={6}>
                    <FaPhone style={{ marginRight: '5px' }} /> Phone
                    <br></br>
                    <p>54866464</p>
                  </Col>
                  <Col xs={6} style={{float:"right"}} >
                    <FaEnvelope style={{ marginRight: '5px' }} /> Email
                    <p style={{ marginLeft: '1.5rem' }}>oneplusinfo@gmail.com</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FaMapMarkerAlt style={{ marginRight: '5px' }} /> Address
                    <p>5/55,Town city,UK</p>
                  </Col>
                </Row>
              </Form>
            </Col>
            {/* <Col xs={6} md={2} style={{ backgroundColor: 'green',display:'flex',justifyContent:"flex-end" }}> */}
              {/* Adjust the width and height as needed */}
            {/* </Col> */}
          </Row>
        </Container>
    
    </div>
  );
};

export default Contact;
