import React, {useState} from "react";
import firebase from '../../config/firebase';
import 'firebase/auth';
import {Link, Redirect} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import ReactSession from 'react-client-session';


function Teste(){
    const userLogin = localStorage.getItem('userLogin');
    const userEmail = localStorage.getItem('userEmail');

    return (
        <>
        <p>ok</p>
        <h1>{userLogin} ok</h1>
        <h1>{userEmail} ok</h1>
        </>
    )
}

export default Teste;