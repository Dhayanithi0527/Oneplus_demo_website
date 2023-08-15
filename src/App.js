import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './Components/inc/Navbar';
import Home from './Components/pages/Home';
import CartPage from './Components/pages/Cart';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Footer from './Components/inc/Footer';
import {HashRouter as Router,Route,Routes } from 'react-router-dom';


function App() {
  return (
    <Router basename='/'>
        <Navbars/>
        <Routes>
         
          <Route exact path="/" element={<Home/>} />
          
          <Route  path="/CartPage" element={<CartPage/>} />
         

          <Route  path="/About" element={<About/>}/>
         
          <Route path="/Contact" element={<Contact/>} />
           
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
