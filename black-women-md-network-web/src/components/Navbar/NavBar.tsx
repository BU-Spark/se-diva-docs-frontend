import React from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const signOut = useSignOut();
  const navigate = useNavigate();
  const isAuthenticated = useIsAuthenticated();
  console.log("is the user authed? " + isAuthenticated());

  const logOut = () => {
    signOut();
    navigate("/signin");
  };
  if (isAuthenticated()) {
    return (
      <Navbar
        className="navbar navbar-custom"
        fixed="top"
        expand="lg"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand href="/">BWMDN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/members">Members</Nav.Link>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/news">News</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={logOut}>Sign Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar
        className="navbar navbar-custom"
        fixed="top"
        expand="lg"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand href="/">BWMDN</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/members">Members</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
          </Nav> */}
            <Nav>
              <Nav.Link href="/signin">Sign In</Nav.Link>
              <Nav.Link href="/join">Join</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      /*
    <Navbar className="navbar navbar-custom" fixed="top" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">BMWDN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/membership">Membership</Nav.Link>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    /*
    <Navbar className="navbar navbar-custom" fixed="top" expand="lg" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand href="/">BMWDN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown className="navdropdown" title="About" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/whoarewe">Who are We?</NavDropdown.Item>
              <NavDropdown.Item href="/mission">Our Mission</NavDropdown.Item>
              <NavDropdown.Item href="/team">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="/directors">Board of Directors</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navdropdown" title="Membership" id="collasible-nav-dropdown">
              <NavDropdown.Item className="disabled"><b>Community</b></NavDropdown.Item>
              <NavDropdown.Item href="/societies">Member Societies</NavDropdown.Item>
              <NavDropdown.Item href="/chapters">Member Chapters</NavDropdown.Item>
              <NavDropdown.Item href="/partners">Partners</NavDropdown.Item>
              <NavDropdown.Item href="/sponsors">Corporate Sponsors</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled"><b>Member Directory</b></NavDropdown.Item>
              <NavDropdown.Item href="/directory">Search by Last Name</NavDropdown.Item>
              <NavDropdown.Item href="/directory">Search by Specialty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled"><b>Member Resume Bank</b></NavDropdown.Item>
              <NavDropdown.Item href="/resumebank">Search by Last Name</NavDropdown.Item>
              <NavDropdown.Item href="/resumebank">Search by Specialty</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled"><b>Networking</b></NavDropdown.Item>
              <NavDropdown.Item href="/events">Conferences/Meetings/Webinars</NavDropdown.Item>
              <NavDropdown.Item href="/meals">Meal Gatherings</NavDropdown.Item>
              <NavDropdown.Item href="/chapterevents">Member Chapter Events</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navdropdown" title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/jobs">Jobs</NavDropdown.Item>
              <NavDropdown.Item href="/training">Leadership Training</NavDropdown.Item>
              <NavDropdown.Item href="/coaching">Physician Coaching</NavDropdown.Item>
              <NavDropdown.Item href="/opportunities">Other Career Opportunities</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="navdropdown" title="News" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/blog">Member Blog</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled"><b>Member Bulletin Board</b></NavDropdown.Item>
              <NavDropdown.Item href="/announcements">Announcements</NavDropdown.Item>
              <NavDropdown.Item href="/community events">Community Events</NavDropdown.Item>
              <NavDropdown.Item href="/jobs">Jobs/Opportunities</NavDropdown.Item>
              <NavDropdown.Item href="/question">Post A Question</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/media">Media/Press</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/signin">Sign In</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  */
    );
  }
}

export default NavBar;
