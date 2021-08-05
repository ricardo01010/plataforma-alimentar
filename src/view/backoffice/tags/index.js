import { useState, useEffect } from "react";
import firebase from "../../../config/firebase";

import NavebarComponent from "../../../components/navebarBackoffice";

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function App(){
    const [tags, setTags] = useState([]);
    let listaTags =[];
    useEffect(()=>{
        firebase.firestore().collection('tags').get().then( async (resultado) => {
            await resultado.docs.forEach(doc =>{
                listaTags.push({
                    id: doc.id,
                    ... doc.data()
                })
            })
            setTags(listaTags);
        })
    });

    const listTags = tags;
    return(
        <>
        {listTags.forEach((e)=>{
           /*e.name*/
        })}
        </>
        
    )
    
}

export default App;