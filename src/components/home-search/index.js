import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HomeSearch extends Component{
    render(){
        return(
        <div className="masterDiv">
            <Container fluid className="containerDiV">
                <Row>
                    <Col>
                    <div className="searchDiv">
                        <input placeholder="O que vai ser hoje?"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        )
    } 
}

export default HomeSearch;