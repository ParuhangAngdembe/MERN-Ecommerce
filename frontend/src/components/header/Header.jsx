/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";

import logo from "../../images/logo.2.png";

const Header = () => {
  return (
    <Navbar
      className="nav d-flex justify-content-center"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container className="navContainer">
        <Navbar.Brand href="#home" className="brand">
          <img src={logo} alt="brand logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Shop</Nav.Link>
            <Nav.Link href="/">Collection</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Form className="d-flex me-2">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
              User
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
              <Dropdown.Item href="/register">Register</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
