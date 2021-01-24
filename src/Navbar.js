import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
const NavBar = () => {
    return(
      <Navbar expand="lg" id="nav" variant="light">
      <Router>
      <img src="logo.png" alt=""  id="logo"/>
    <Navbar.Brand href="#home" id="home">MangaHub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="color" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-element">
        <Nav.Link className="color">Test</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Router>
<div className="search-box d-flex justify-center align-center">  
              <input type="text" placeholder="Type to search .."/>
             <div className="search-btn max-h-20 glyphicon glyphicon-search"/>
            </div>
    </Navbar>
    );
  }

export default NavBar
