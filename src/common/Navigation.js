import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {

    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Ar Salon & Day Spa</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigation;
