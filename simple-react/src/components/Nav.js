import React  from "react";
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "./Nav.css"
import {useSelector} from "react-redux";

const Navi = ()=>{

    const {robos}=useSelector((state)=>state.allRobos)

    return (
        <div>
        <Navbar className="navbar" >
        <Nav className="me-auto">
        <a href="/" className="link">
        <h4 className="logo">DelincuenMapa</h4>
        </a>
        <a href="/form" className="formu">Formulario</a>
        {/*<Nav.Link href="/estadisticas">Interesantes estadisticas</Nav.Link>*/}
        <h6 className="joda"> Robos registrados: {robos.length}</h6>
        </Nav>
|       </Navbar>
        </div>
)

}


export default Navi
//bg="light" variant="light"