import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from '../images/doglogo.png';

export default function NavBarLoggedIn(props) {
    return (
        <Navbar className="nav" expand={false}>
          <Container fluid>
            <LinkContainer to="/">
              <img className="logo" src={Logo} alt="company logo" />
            </LinkContainer>
            <div className="navRight">
              <LinkContainer to="/login">
                <Nav.Link className="navlink">Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/register">
                <Nav.Link className="navlink">Create Account</Nav.Link>
              </LinkContainer>
              <Navbar.Toggle aria-controls="offcanvasNavbar" />
              <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end">
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <LinkContainer to="/aboutUs">
                      <Nav.Link>About Us</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/safetyTips">
                      <Nav.Link>Safety Tips</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/register">
                      <Nav.Link >Create Account</Nav.Link>
                    </LinkContainer>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Container>
        </Navbar>
    )};