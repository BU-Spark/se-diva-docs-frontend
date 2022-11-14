import React from 'react';
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col'

function NavBar() {
  return (
    <Navbar className="navbar" variant="dark" fixed="top" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">M.D. Network</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className="navdropdown" title="Membership" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/join">Join Us!</NavDropdown.Item>
              <NavDropdown.Item href="/directory">Directory</NavDropdown.Item>
              <NavDropdown.Item href="/resumebank">Resume Bank</NavDropdown.Item>
              <NavDropdown.Item href="/findanexpert">Find An Expert</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navdropdown" title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/resumereview">Resume Review</NavDropdown.Item>
              <NavDropdown.Item href="/headshot">Headshot</NavDropdown.Item>
              <NavDropdown.Item href="/findanexpert">Find An Expert</NavDropdown.Item>
              <NavDropdown.Item href="/coaching">Coaching</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navdropdown" title="Events" id="collasible-nav-dropdown">
            </NavDropdown>
            <NavDropdown className="navdropdown" title="Community" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.divadocsboston.com/">Diva Docs</NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;