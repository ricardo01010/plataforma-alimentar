import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navebar.css';
import { Container } from 'react-bootstrap';

const userLogin = localStorage.getItem('userLogin');

function logoutAccount() {
    
    localStorage.clear();
}

class NavebarComponent extends Component{
    

    render(){
        return(
        <Navbar collapseOnSelect expand="lg" className="fixed-top navebar">
            <Container>
                <Navbar.Brand href="#home">Plataforma</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Receitas</Nav.Link>
                        <Nav.Link href="#features">Produtos</Nav.Link>
                        <Nav.Link >Produtores</Nav.Link>
                    </Nav>
                    <Nav>
                        {
                            userLogin > 0 ?
                            <>
                                <Nav.Link onClick={logoutAccount} className="btn-navebarRight">Logout</Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link href="/login" className="btn-navebarRight">Conta</Nav.Link>
                            </>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        )
    } 
}

export default NavebarComponent;