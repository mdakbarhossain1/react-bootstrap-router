import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Stack direction="horizontal" gap={5}>
                <NavLink
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/employee"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red"
                  }}
                >
                  Employee
                </NavLink>
              </Stack>

            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;