import React  from "react";
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Nav.css"

const Navi = ()=>{
    return (
        
        <Navbar bg="light" variant="light" >
        <Nav className="me-auto">
        <a href="/" className="link">
        <h4>DelincuenMapa</h4>
        </a>
        <Nav.Link href="/form">Llena el formulario de tu robo</Nav.Link>
        <Nav.Link href="/estadisticas">Interesantes estadisticas</Nav.Link>
        </Nav>
|       </Navbar>
        
)

}


export default Navi