import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {

  return (
    <div className="app__header">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#homepage">Roger Brascó</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#homepage">Home</Nav.Link>
          <Nav.Link href="#about">About me</Nav.Link>
          <Nav.Link href="#portofolio">Portofolio</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#contact">Contact me</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );

};

export default Header;
