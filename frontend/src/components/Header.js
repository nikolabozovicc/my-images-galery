import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { ReactComponent as Logo } from '../images/logo.svg';

const navbarStyle = {
  backgroundColor: 'lightblue'
}

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="light">
      <Container className='ml-4'>
        <Logo alt={title} style={{maxWidth: '16rem', maxHeight: '3rem'}} />
      </Container>
    </Navbar>
  )
}

export default Header;