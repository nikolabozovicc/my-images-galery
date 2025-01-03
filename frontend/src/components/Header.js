import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const navbarStyle = {
    backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
    return (
        <Navbar style={navbarStyle} variant="light">
            <Container className='ml-4'>
                <Navbar.Brand href="/">{title}</Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header;