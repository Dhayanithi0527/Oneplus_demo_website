import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import Oneplus11 from '../images/card_pics/One_plus11_5G.jpg';
import Oneplus11R from '../images/card_pics/One_plus11R_5G.jpg';
import Oneplus9 from '../images/card_pics/Oneplus9.jpg';
import Oneplus8T from '../images/card_pics/Oneplus8T.jpg';
import Oneplus10T from '../images/card_pics/Oneplus10Pro.jpg';

const Products = () => {
  return (
   <>
    <div>
      <Container>
        <h2>Products</h2>
       <Row>
        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card>
            <Card.Img variant="top" src={Oneplus10T} />
              <Card.Body>
                <Card.Title>Oneplus10T Pro</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card >
            <Card.Img variant="top" src={Oneplus11}/>
              <Card.Body>
                <Card.Title>Oneplus11 </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card >
            <Card.Img variant="top" src={Oneplus11R}/>
              <Card.Body>
                <Card.Title>Oneplus11R</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card >
            <Card.Img variant="top" src={Oneplus8T} />
              <Card.Body>
                <Card.Title>Oneplus8T</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>
        
       </Row>

       <Row>
        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card>
            <Card.Img variant="top" src={Oneplus10T} />
              <Card.Body>
                <Card.Title>Oneplus10T Pro</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card >
            <Card.Img variant="top" src={Oneplus11}/>
              <Card.Body>
                <Card.Title>Oneplus11 </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5'>
        <Card >
            <Card.Img variant="top" src={Oneplus11R}/>
              <Card.Body>
                <Card.Title>Oneplus11R</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>

        <Col className='d-block flex md-3 ms-auto mt-5 '>
        <Card >
            <Card.Img variant="top" src={Oneplus8T} />
              <Card.Body>
                <Card.Title>Oneplus8T</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">View Product</Card.Link>
                <Card.Link href="#">Add to Cart</Card.Link>
              </Card.Body>
            </Card>
        </Col>
        
       </Row>
      </Container>
      
    </div>
    
   </>
  )
}

export default Products