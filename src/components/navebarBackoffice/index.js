import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';

class NavebarComponent extends Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Backoffice</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/backoffice/">Home</Nav.Link>
                <NavDropdown title="Tags" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/backoffice/tags">Ver Tags</NavDropdown.Item>
                  <NavDropdown.Item href="/backoffice/tagsadd">Adicionar Tags</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    } 
}

export default NavebarComponent;