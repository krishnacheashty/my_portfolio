import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import './navtop.css'

const Navtop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <>
            <Navbar.Brand href="#home" >Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="options">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                
                </Nav>
                
            </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Navtop;
