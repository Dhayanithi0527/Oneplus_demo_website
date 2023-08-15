import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Navbar,
  Nav,
  Badge,
  Modal,
} from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import Oneplus11 from '../images/card_pics/One_plus11_5G.jpg';
import Oneplus11R from '../images/card_pics/One_plus11R_5G.jpg';
import Oneplus9 from '../images/card_pics/Oneplus9.jpg';
import Oneplus8T from './Product_images/Oneplus8T.jpg';
import Earbudsp1 from './Product_images/Earbudsp1.jpg';
import Earbudsp2 from './Product_images/Earbudsp2.jpg';
import Earphonep1 from './Product_images/Earphonep1.jpg';
import OnplusNord_CE_3 from './Product_images/one+nordCE3.jpg';
import Oneplus10Pro from './Product_images/Oneplus10Pro.jpg';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    { id: 1, name: 'Oneplus11',spec:'8GBRAM+256ROM|| SD888|| AMOLED Display||FastCharge :33W', price: 54500, imageUrl: Oneplus11 },
    { id: 2, name: 'Oneplus11R',spec:'8GBRAM+256ROM || SD885|| AMOLED Display', price: 39999, imageUrl: Oneplus11R },
    { id: 3, name: 'Oneplus9',spec:'8GBRAM+256ROM || SD885 || FastCharge :33W', price: 37999, imageUrl: Oneplus9 },
    { id: 4, name: 'Oneplus8T ProMax',spec:'8GBRAM+256ROM|| SD875|| DartCharge :60W || Creative Design', price: 29910, imageUrl: Oneplus8T },
    { id: 5, name: 'OnplusNord_CE_3',spec:'8GBRAM+126ROM||SD865|| Smooth Gaming Experience ', price: 26916, imageUrl: OnplusNord_CE_3 },
    { id: 6, name: 'Oneplus Wireless Earbud2M88',spec:'Battery Perfomance long standby more than 8hours', price: 2499, imageUrl: Earbudsp2 },
    { id: 7, name: 'Oneplus Wireless Earbud1N77',spec:'Battery Perfomance long standby more than 10hours', price: 2999, imageUrl: Earbudsp1 },
    { id: 8, name: 'Wireless EarphoneN02',spec:'Battery Perfomance long standby more than 6hours', price: 1999, imageUrl: Earphonep1 },
    { id: 9, name: 'Oneplus10Pro',spec:'8GBRAM+256ROM DartCharge Mode:66W||SD895||Smooth Touching Experience', price: 59999, imageUrl: Oneplus10Pro },
  ];
    
  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    );
    setCartItems(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Navbar.Brand href="#home">Add to Cart Page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
                <Nav.Link onClick={() => setShowCart(true)} >
                    <FaShoppingCart className="mr-2" /> 
                    Cart{' '}
                    <Badge variant="primary">
                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                    </Badge>
                </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card style={{ margin: '1rem' }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <p>{product.spec}</p>
                <Card.Text>Price: Rs.{product.price}</Card.Text>
                <Button variant="outline-dark" onClick={() => addToCart(product)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={showCart} onHide={() => setShowCart(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  {item.name} - ${item.price} x {item.quantity}{' '}
                  <Button variant="success" size="sm" className="ml-2" onClick={() => increaseQuantity(item.id)}>+</Button>{' '}
                  <Button variant="warning" size="sm" onClick={() => decreaseQuantity(item.id)}>-</Button>{' '}
                  <Button variant="danger" size="sm" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </li>
              ))}
              <hr />
              <strong>Total: ${cartTotal.toFixed(2)}</strong>
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCart(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
export default CartPage;
