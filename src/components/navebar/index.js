import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavebarComponent extends Component{
    render(){
        return(
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">Plataforma</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Receitas</Nav.Link>
                    <Nav.Link href="#features">Produtos</Nav.Link>
                    <Nav.Link href="#features">Produtores</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link href="#deets">More deets</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    } 
}

export default NavebarComponent;