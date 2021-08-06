import { useState, useEffect } from "react";
import firebase from "../../../config/firebase";

import NavebarComponent from "../../../components/navebarBackoffice";
import TagsListComponent from "../../../components/tags-list";

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'




function App(){
    return(
<>
        <NavebarComponent/>
        <br></br><br></br><br></br><br></br><br></br>
        <TagsListComponent />
    </>
    )
    
}

export default App;