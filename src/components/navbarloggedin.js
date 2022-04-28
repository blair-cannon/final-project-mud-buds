import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBarLoggedIn(props) {
    return (
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <LinkContainer to="/feed">
              <Nav.Link>Feed</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/notifications">
              <Nav.Link>Notifications</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/profile">
              <Nav.Link>Profile</Nav.Link>
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
                  <Nav.Link href="#action3">Log Out</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )};