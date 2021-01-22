import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return(
      <Navbar expand="lg" id="nav" variant="light">
    <Navbar.Brand href="#home" id="home">MangaHub</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className="color" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav-element">
        <Nav.Link href="#home" className="color">Novels</Nav.Link>
        <Nav.Link href="#link" className="color">Books</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    );
  }

export default NavBar
