import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HomeButtons extends Component{
    render(){
        return(
        <Container>
            <Row>
              <Col>
                <Button variant="outline-dark">Receitas</Button>
              </Col>
              <Col>
                <Button variant="outline-dark">Produtos</Button>
              </Col>
              <Col>
                <Button variant="outline-dark">Produtores</Button>
              </Col>
              <Col>
                <Button variant="outline-dark">Grupos</Button>
              </Col>
              <Col>
                <Button variant="outline-dark">--------</Button>
              </Col>
            </Row>
        </Container>
        )
    } 
}

export default HomeButtons;