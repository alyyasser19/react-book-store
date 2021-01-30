import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-router-dom";
const NavBar = () => {
    return (
      <Navbar expand="lg" id="nav" variant="light">
        <Link href="./" to="./">
          <img src="logo.png" alt="" id="logo" />
        </Link>
        <Navbar.Brand href="./" id="home">
          MangaHub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="color" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-element">
            <Nav.Link className="color" href="./Test">
              Test
            </Nav.Link>
          </Nav>
          <Nav className="nav-element">
            <Nav.Link className="color" href="./login">
              login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <div className="search-box d-flex justify-center align-center">
          <input type="text" placeholder="Type to search .." />
          <div className="search-btn max-h-20 glyphicon glyphicon-search" />
        </div>
      </Navbar>
    );
  }

export default NavBar
