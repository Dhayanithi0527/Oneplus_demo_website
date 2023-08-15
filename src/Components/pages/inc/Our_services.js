import React from 'react';
import {Card, Button, Container, Row, Col } from 'react-bootstrap';
import Earbudp1 from '../Product_images/Earbudsp1.jpg';
import Phonep1 from '../Product_images/Mobilep1.jpg';
import Earphonep1 from '../Product_images/Earphonep1.jpg'
import {Link} from 'react-router-dom'


function Ourservices() {
  return (
    <section>
        <Container>
            <Row>
                <Col className='md-12 mb-4 text-center p-4'>
                    <h3 className='company_name' style={{color:'orange',hover:'underline'}}>Newly Launched Products</h3>
                </Col>
                
                
            </Row>
            <Row>
                <Col className='md-4 '>
                    <Card  className='shadow-card'  >
                        <Card.Img variant="top" src={Earbudp1} style={{height:'250px'}} />
                        <Card.Body>
                            <Card.Title>OnePlus+ Wireless Earbuds SM88</Card.Title>
                            <Card.Text>
                            One Plus  wireless Earbuds with fast charging and compactable.
                            </Card.Text>
                            <Link to='/CartPage'><Button variant='outline-dark'>View Products</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='md-4 mb-5'>
                    <Card  className='shadow-card'   >
                        <Card.Img variant="top" src={Earphonep1} style={{height:'250px'}} />
                        <Card.Body>
                            <Card.Title>OnePlus+ Wireless Earphone M951</Card.Title>
                            <Card.Text>
                            One Plus  wireless Earphone with fast charging and compactable.
                            </Card.Text>
                            <Link to='/CartPage'><Button variant='outline-dark'>View Products</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col className='md-4 mb-5'>
                    <Card  className='shadow-card'  >
                        <Card.Img variant="top" src={Phonep1}  style={{height:'250px'}} />
                        <Card.Body>
                            <Card.Title>OnePlus+ 10T</Card.Title>
                            <Card.Text>
                            It is powered by an octa-core Qualcomm Snapdragon 8+ Gen 1 processor.
                            </Card.Text>
                            <Link to='/CartPage'><Button variant='outline-dark'>View Products</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  );
}

export default Ourservices;