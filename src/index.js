import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import 'bootstrap/dist/css/bootstrap.min.css';


function BookList() {
  return (
    <section>
    <NavBar />
    <div id="container">
      <Book />
      <Book />
      <Book />
      <Book />
      </div>
    </section>
  );
}

const Book = () => {
  return (
    <article id="Book">
      <Image />
      <h1 className="Title" >
        Chronicles of aoly land
    </h1>
    <h4 className="Author">Aoly Land</h4>
    </article>
  )
}

const Image = () => {
  return <img src='logo192.png' alt='' />
}
const NavBar = () => {
  return(
    <Navbar expand="lg" id="nav" variant="dark">
  <Navbar.Brand href="#home" id="home">MeinBuch</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className="color" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="nav-element">
      <Nav.Link href="#home" className="color">Novels</Nav.Link>
      <Nav.Link href="#link">Books</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
}
ReactDOM.render(<BookList />, document.getElementById('root'));
