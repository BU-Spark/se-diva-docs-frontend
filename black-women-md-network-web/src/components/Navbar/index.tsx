import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Membership" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/joinus">Join Us!</NavDropdown.Item>
              <NavDropdown.Item href="/directory">Directory</NavDropdown.Item>
              <NavDropdown.Item href="/resumebank">Resume Bank</NavDropdown.Item>
              <NavDropdown.Item href="/findanexpert">Find An Expert</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/resumereview">Resume Review</NavDropdown.Item>
              <NavDropdown.Item href="/headshot">Headshot</NavDropdown.Item>
              <NavDropdown.Item href="/findanexpert">Find An Expert</NavDropdown.Item>
              <NavDropdown.Item href="/coaching">Coaching</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
            </NavDropdown>
            <NavDropdown title="Community" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://www.divadocsboston.com/">Diva Docs</NavDropdown.Item>
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;