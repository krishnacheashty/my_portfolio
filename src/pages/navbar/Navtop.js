import React from 'react';
import {  Nav, Navbar } from 'react-bootstrap';
import './navtop.css';
import { Link} from "react-router-dom";

const Navtop = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <>
            <Navbar.Brand className="mx-5" >Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="options">
                
                <Link to='/home'style={{textDecoration:'none',margin:'0 20px 0 0',fontSize:'20px'}}>Home</Link>
                <Link to='/contact' style={{textDecoration:'none',fontSize:'20px'}}>Contact</Link>
                
                </Nav>
                
            </Navbar.Collapse>
            </>
        </Navbar>
    );
};

export default Navtop;
