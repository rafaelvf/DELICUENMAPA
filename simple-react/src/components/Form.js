import React, { useEffect } from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import categorias from "../categorias";
import metodo from "../Metodo";
import "./Form.css";
import { useState } from "react";
import MapaForm from "./MapaForm";
import axios from "axios";
import URLrequests from '../contantesURL'

const Forms = () => {
    
    
    
    const [coord,setCoord]=useState({})
    const [fecha,setFecha]=useState("");
    const [articulo,setArticulo]=useState([]);
    const [valor,setValor]=useState(0);
    const [tipo,setTipo]=useState([]);
    const [descripcion,setDescripcion]=useState("");
    
    const pull_data=(data)=>{
        console.log(data,"kkk")
        setCoord(data)
        
    }
    // const [position,setPosition]=useState({lat:0,lng:0});

    // useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition(function (position){
    //             setPosition({
    //                 lat:position.coords.longitude,
    //                 lng:position.coords.latitude
    //             })
    //     },
    //     function (error){console.log(error)},
    //     {
    //         enableHighAccuracy:true
    //     })
    // },[])


    const Check=(value)=>{
        const categories=articulo.some((i)=>i===value)
        if(!categories){
            setArticulo([...articulo,value])
        }else{
            const filter=articulo.filter((i)=>i !== value)
            setArticulo(filter)
        }
    }

    const Check2=(value)=>{
        const categories=tipo.some((i)=>i===value)
        if(!categories){
            setTipo([...tipo,value])
        }else{
            const filter=tipo.filter((i)=>i !== value)
            setTipo(filter)
        }

    }

    const post={
        coordenadas:coord,
        fechaHora:fecha,
        articulo:articulo,
        valor:valor,
        tipo:tipo,
        descripcion:descripcion
    }

    async function handleSubmit(i){
        i.preventDefault();
        if( !fecha || !articulo.length || !tipo.length ){
            alert("Por favor llenar todos los campos")
        }else{
        let res=await axios.post(`${URLrequests}customers`,post)
        alert("Se ha creado correctamente!")
        console.log(res.data)
        }
    }

    // console.log(position,"ji")
    return (
        <div className="formulario" onSubmit={handleSubmit}>
        <p className="tituloform">Haz click en el mapa en el lugar dónde te robaron </p>
        {/* <p>lat:{position.lat}</p>
        <p>lng:{position.lng}</p> */}
        <Form>
        {/* <div style={{ height: "250px", width: "100%" }}> */}
           <div className="mapa"> 
            <MapaForm func={pull_data}/>  
        </div>
        <div className="for">
        <br />
        <Form.Label><b>Fecha y hora</b></Form.Label>
        <br />
        <input type="datetime-local" value={fecha} onChange={(e)=>setFecha(e.target.value)}/>
        <br />
        <br />
        <Form.Label><b>Selecciona qué te robaron</b></Form.Label>
        <br />
        {categorias.map((i) => (
            <Form.Check
            inline
            label={i}
            name="group1"
            type="checkbox"
            id="inline-checkbox"
            value={i}
            onChange={(e)=>Check(e.target.value)}
            />
        ))}
        <br />
        <br />
        <Form.Label><b>Valor aproximado de tu perdida</b></Form.Label>
        <br />
        <input type="number" min={0} value={valor} onChange={(e)=>setValor(parseInt(e.target.value))} />$<br />
        <br />
        
        <Form.Label><b>Selecciona cómo te robaron</b></Form.Label>
        <br/>
        {metodo.map((i) => (
            <Form.Check
            inline
            label={i}
            name="group1"
            type="checkbox"
            id="inline-checkbox"
            value={i}
            onChange={(e)=>Check2(e.target.value)}
            />
        ))}
        <br />
        <br/>
        <Form.Label><b>Detalles extra</b></Form.Label>
        <br />
        <FloatingLabel
            controlId="floatingTextarea"
            label="Aquí puedes escribir mas información de lo sucedido"
            className="mb-3"
        >
            <Form.Control as="textarea" placeholder="Comments" value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)} />
        </FloatingLabel>
        <br />
        
        <button className="boton" type="submit">Crear</button>
                                
           </div>                 
        </Form>
    </div>
    );
};

export default Forms;
