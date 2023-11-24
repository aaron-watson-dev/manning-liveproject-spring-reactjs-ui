import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Ar Salon & Day Spa</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Navigation;
