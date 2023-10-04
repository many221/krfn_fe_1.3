import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png"; // Assuming logo is placed in src/assets

const Header: React.FC = () => {
  return (
    <Navbar
      variant="light"
      expand="lg"
      className="justify-content-between"
    >
      <LinkContainer to="/">
        <Navbar.Brand>
          <img
            src={logo}
            className="d-inline-block align-top"
            alt="Site Logo"
          />{" "}
        </Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link className="rounded px-3">Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/about">
            <Nav.Link className="rounded px-3">About</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link className="rounded px-3">Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
