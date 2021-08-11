import React, { useState } from "react";
import firebase from "../../config/firebase";
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

/* Bootstrap */
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './login.css';


function App(){

  const userLogin = localStorage.getItem('userLogin');
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [msgTipo,setMsgTipo] = useState();

  const dispatch = useDispatch();

  function login(){
      firebase.auth().signInWithEmailAndPassword(email,password).then(resultado =>{
          setMsgTipo('sucesso');
          localStorage.setItem('userLogin', 1);
          localStorage.setItem('userEmail', email);
      }).catch(erro =>{
          setMsgTipo('erro');
      }) 
  }
  
  return(
    <>
      <Container fluid role="main">
        <Row>
          <Col className="imageDiv">
          </Col>
          <Col sm>
            <>
                {
                  
                    userLogin > 0 ? <Redirect to="/" />:null
                }
                <form className="form-signin mx-auto">
                    <h1 className="h3 mb-3 font-weight-normal text-white font-weight-bold text-center">Login</h1>
                    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" className="form-control my-2" placeholder="Email"  />
                    <input onChange={(e)=> setPassword(e.target.value)} type="password" id="inputPassword" class="form-control my-2" placeholder="Password"/>
                    <button className="btn btn-lg btn-primary btn-block " type="button" onClick={login}>Sign in</button>

                    <div className="msg-login text-white mt-2 text-center my-5">         
                            
                      {msgTipo === 'sucesso' && <span><strong>WoW!</strong> Você está conectado &#9889;</span>}
                      {msgTipo === 'erro' && <span><strong>WoW!</strong> Verifique o user e password! &#128551;</span>}                       

                    </div>

                    <div className="opcoes-login mt-5 text-center">
                        <a href="#" className="mx-2">Recuperar Senha</a>
                        <span className="text-white">&#9733;</span>
                        <Link to="registo" className="mx-2">Criar Conta</Link>
                    </div>
                </form>
            </>            
          </Col>
        </Row>
      </Container>
      <footer className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here.</span>
        </div>
      </footer>
      
    </>
  )
}

export default App;