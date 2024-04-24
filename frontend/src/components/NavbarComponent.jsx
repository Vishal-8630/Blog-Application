import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" variant="dark" bg="dark" className="">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>V Blog</Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to="/register">
            <Nav.Link>Register</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/login">
            <Nav.Link>Login</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/logout">
            <Nav.Link>Logout</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
