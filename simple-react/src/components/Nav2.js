import React  from "react";
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Nav.css"

import logod from "../img/logod.png";

const Navi2 = ()=>{

    

    return (
        <div>
        <Navbar className="navbar" >
        <Nav className="me-auto">
        <a href="/" className="link">
        <img src={logod} alt="DelincuenMapa" className="foto"  />
        </a>
        </Nav>
        </Navbar>
        </div>
)

}


export default Navi2