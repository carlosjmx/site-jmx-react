import React from 'react';
import {Link} from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import './style.css';

const Header = () => {
    return (
        <>
            <div className='container-fluid back-header'>
                <div className='container header'>
                    <Link className="logomarca" to='/'>
                        <img src="/img/jmxLogo.png" alt="logo" />
                    </Link>
                    <Navbar className="customNavbar" >
                        <Container className="navbar-container ">
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse >
                                <Nav variant='light' className="me-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">
                                            Separated link
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>

        </>
    )
}

export default Header;
