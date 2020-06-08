import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export class Header extends Component {
    
    render() {
        return (
            <Navbar bg='dark' expand='lg'>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                <Nav>
                
                <NavLink style={linkStyle} className="d-inline p-2 bg-dark " to="/">Home</NavLink>
                <NavLink style={linkStyle} className="d-inline p-2 bg-dark " to="/product">Products</NavLink>
            

                </Nav>
            </Navbar>
        )
    }
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }

  
export default Header