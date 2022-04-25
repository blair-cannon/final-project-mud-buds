import './App.css';
import {Outlet} from 'react-router-dom';
import {Nav, Navbar, Container, Offcanvas} from 'react-bootstrap';

function LoggedInApp() {
  return (
    <div className="App">
      <Navbar bg="light" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <Nav.Link href="#">Feed</Nav.Link>
          <Nav.Link href="#">Notifications</Nav.Link>
          <Nav.Link href="#">Profile</Nav.Link>
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
                <Nav.Link href="#action3">Create Account</Nav.Link>
                <Nav.Link href="#action3">Log Out</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

export default LoggedInApp;