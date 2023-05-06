import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Navbarcomp() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">V'Collect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Login">Home</Nav.Link>
            {/* <Nav.Link href="/customer">Customers</Nav.Link> */}
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/update">Update Details</NavDropdown.Item>
              <NavDropdown.Item href="/loanRequest">Request for loan</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;
