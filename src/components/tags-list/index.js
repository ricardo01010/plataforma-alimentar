import Badge from 'react-bootstrap/Badge'
import firebase from '../../config/firebase';

/* Bootstrap */
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import React,{useState,useEffect} from 'react';

var db = firebase.firestore();

function TagsList(){
    const [tags,setTags]=useState([]);

    const fetchTags=async()=>{
        const response=db.collection("tags").orderBy("name", "asc");
        const data=await response.get();
        data.docs.forEach(item=>{
            setTags(tags=>[...tags,item.data()]);
        })
    }
    
    useEffect(() => { 
        fetchTags();
    }, [])




    return(
        
        <div>
            
            <div className="App">
                <Container>
                    <Row>
                    <Col>
                    {
                    tags && tags.map(data=>{
                    return(
                        <>
                        
                        <Badge pill bg="dark ml-2">{data.name}</Badge>
                        
                        </>
                        )
                    })
                    }
                    </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default TagsList;