import * as React from 'react';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import { BsLinkedin, BsGithub } from 'react-icons/bs';



const Navigation = () => {
    return (
        <>
        <Navbar collapseOnSelect fixed="top" expand="sm" bg="dustyrose" variant="light">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="/" className="text-light">Home</Nav.Link>
                        <Nav.Link href="/Projects" className="text-light">Projects</Nav.Link>
                    </Nav>
                    <NavItem className="m-2">
                        <a href="https://www.linkedin.com/in/elliott-parker-56b23b139" className="text-light text-decoration-none" target="_blank" rel="noreferrer"><BsLinkedin /> LinkedIn</a>
                    </NavItem>
                    <NavItem className="m-2">
                        <a href="https://github.com/kparker1848" className="text-light text-decoration-none" target="_blank" rel="noreferrer"><BsGithub /> GitHub</a>
                    </NavItem>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    );
};

export default Navigation;