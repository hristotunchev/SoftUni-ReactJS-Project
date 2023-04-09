import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import './Header.css';

export default function Header() {
    return (
        <Navbar className="nav-bar">
            <Container>
                {/* <Navbar.Brand as={Link} to="/">Test Navbar</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/catalog" className="nav-link">Catalog</Nav.Link>
                        <Nav.Link as={Link} to="/create" className="nav-link">Create</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="nav-link">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register" className="nav-link">Register</Nav.Link>
                        <Nav.Link as={Link} to="/logout" className="nav-link">Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};