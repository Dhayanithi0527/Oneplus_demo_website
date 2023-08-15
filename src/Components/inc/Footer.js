import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';


function Footer() {
  return (
    <section style={{backgroundColor:'black'}} className='footer text-white mt-5' >
        <Container >
            <Row >
                <Col className='md-4'>
                    <h1>
                        OnePlus+ Pvt Ltd
                    </h1>
                    <p>
                    Where innovation meets elegance.</p>
                    <p>dhayanithi@copy All Rights</p>
                </Col>
                <Col className='md-4 text-white mt-2 '>
                    <h6>Quick Links</h6>
                    <hr/>
                    <div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div>
                        <Link to='/CartPage'>Products</Link>
                    </div>
                    <div>
                        <Link to='/About'>About</Link>
                    </div><div>
                        <Link to='/Contact'>Contact</Link>
                    </div>
                </Col>
                <Col className='md-4 mt-2'>
                    <h6>Contact Information</h6> 
                    <hr/>
                    <div>
                        <p className='text-white mb-2'>
                        123/550,CapeTown city,UK.
                        </p>
                    </div>
                    <div>
                        <p className='text-white mb-2'>
                           +91 777xxx8951
                        </p>
                    </div>
                    <div>
                        <p className='text-white mb-2'>
                           +91 777xxx8952
                        </p>
                    </div>
                    <div>
                        <p className='text-white mb-2'>
                           OnePlusaspire.info@gmaill.com
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Footer;