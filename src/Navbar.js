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
     <div className="container h-100" id="search">
     <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
      <div className="d-flex justify-content-center h-100">
        <div className="searchbar">
          <input className="search_input" type="text" name="" placeholder="Search..."/>
          
        </div>
      </div>
    </div>
  </Navbar>
    );
  }

export default NavBar
