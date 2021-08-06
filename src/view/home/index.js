import NavebarComponent from "../../components/navebar";
import SearchBanner from "../../components/home-search";
import ButtonsListComponent from "../../components/home-buttonsList";
import Image from 'react-bootstrap/Image';
import './home.css';
import { useSelector, useDispatch } from "react-redux";

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App(){
    return(
        <>  
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="bannerDiv">
                        <SearchBanner/>                
                    </div>
                </div>
                <div className="col-lg-12 mt-3">
                    <ButtonsListComponent/>
                </div>
            </div>
        </div>
            <NavebarComponent/>
            <Container fluid>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                
                </Row>
            </Container>
            
            
           
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>teste
        </>
        
    )
    
}

export default App;