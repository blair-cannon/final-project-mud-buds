import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import Logo from '../images/doglogo.png';
import AuthService from '../services/auth.service';

export default function NavBarLoggedIn(props) {
    let navigate = useNavigate()
    return (
        <Navbar className="nav" expand={false}>
          <Container fluid>
            <img className="logo" src={Logo} />
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
                    <Nav.Link href="#action1">New Client Info</Nav.Link>
                    <Nav.Link href="#action2">Safety</Nav.Link>
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