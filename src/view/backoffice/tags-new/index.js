import { useState } from "react";
import firebase from "../../../config/firebase";

import NavebarComponent from "../../../components/navebarBackoffice";

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function App(){
    const[tagName, setTagName] = useState();

    const db = firebase.firestore();
    
    function addTag(){
        db.collection('tags').add({
            name: tagName
        }).then(()=>{
            alert("Tag registada com sucesso");
            setTagName(null);
        });
    }

    return(
        <>
            <NavebarComponent/>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
                                <Form.Label>Introduzir o nome da Tag</Form.Label>
                                <Form.Control type="text" onChange={(e)=> setTagName(e.target.value)} />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={addTag}>
                                Criar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
    
}

export default App;