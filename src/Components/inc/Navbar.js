import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from "react-icons/fa";
import '../css/nav.css';
import {Link} from 'react-router-dom'

function Navbars() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sticky-wrapper">
      <Navbar style={{ position: "sticky", top: 0, zIndex: 1000}} bg="dark" data-bs-theme="dark" expand="md" expanded={expanded}>
        <Container>
          <Navbar.Brand style={{color:'red'}} to="/" className="headings">
            OnePlus+ 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            <span className="navbar-toggler-icon" />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Link  to="/" className=" headings me-4">
                <FaHome />  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link  to="/CartPage" className=" headings me-4">
                  Products
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link  to="/About" className=" headings me-4">
                  About Us
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link  to="/Contact" className=" headings me-4">
                  Contact Us
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
