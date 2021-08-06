import Badge from 'react-bootstrap/Badge'
import firebase from '../../config/firebase';
import './tags.css';
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
                    <Row><h1>Tags</h1></Row>   
                    <Row>
                    <Col>
                    {
                    tags && tags.map(data=>{
                    return(
                        <>
                        
                        <Badge className="ml-2 badgeTags">{data.name}</Badge>
                        
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