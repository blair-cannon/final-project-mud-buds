import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBarHome(props) {
    return (    
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <LinkContainer to="/login">
            <Nav.Link>Log In</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/register">
            <Nav.Link>Create Account</Nav.Link>
          </LinkContainer>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Resources</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">New Client Info</Nav.Link>
                <Nav.Link href="#action2">Safety</Nav.Link>
                <LinkContainer to="/register">
                  <Nav.Link>Create Account</Nav.Link>
                </LinkContainer>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    )};