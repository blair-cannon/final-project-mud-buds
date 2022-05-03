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
            <LinkContainer to="/feed">
              <Nav.Link className="navlink">Feed</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/notifications">
              <Nav.Link className="navlink">Notifications</Nav.Link>
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
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">New Client Info</Nav.Link>
                  <Nav.Link href="#action2">Safety</Nav.Link>
                  <LinkContainer to="/">
                    <Nav.Link onClick={() => {
                      AuthService.logout()
                      navigate('/')
                      window.location.reload()
                    }}>Log Out</Nav.Link>
                  </LinkContainer>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    )};