import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { AiOutlineReddit } from "react-icons/ai";

const AdminNavbar = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <AiOutlineReddit />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto right">
              <Nav.Link href="adminScreen">Home</Nav.Link>
              <Nav.Link href="/additem">Add Item</Nav.Link>
              <Nav.Link href="/adminSetting">Account</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;
