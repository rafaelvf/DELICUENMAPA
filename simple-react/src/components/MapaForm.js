import React, { useState, useMemo, useRef, useCallback, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "./MapaForm.css"
// import 'leaflet/dist/leaflet.css'
import {Icon} from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"

import Markers from "./Markers";
import {places} from "../data.json";

const MapaForm = (props) => {


    
    const [state,setState]= useState({
        currentLocation:{lat:-2.170998,lng:-79.922356}
    }) 
    
    const [coordenadas, setCoordenadas] = useState({lat:1, lng: 1});
    
    props.func(coordenadas)

    const onSuccess = (coordenadas) =>{
        setCoordenadas({
            lat:coordenadas.coords.latitude,
            lng:coordenadas.coords.longitude,
        })
    }

    const onError = error =>{
        setCoordenadas({
            error,
        })
    }

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    },[])



    const success = (state) =>{
        setState({
            currentLocation:{
                lat:state.coords.latitude,
                lng:state.coords.longitude, 
            }
        })


    }


    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(success)
    },[])

    // function LocationMarker() {
    //     const [position, setPosition] = useState(null)
    //     const map = useMapEvents({
    //     click() {
    //         map.locate()
    //     },
    //     locationfound(e) {
    //         setPosition(e.latlng)
    //         map.flyTo(e.latlng, map.getZoom())
    //     },
    //     })
    
    //     return null
        
    // }

    const center = {
        lat: 51.505,
        lng: -0.09,
      }


    function DraggableMarker() {
        const [draggable, setDraggable] = useState(true)
        // const [position, setPosition] = useState(center)
        const markerRef = useRef(null)
        const eventHandlers = useMemo(
        () => ({
            dragend() {
            const marker = markerRef.current
            if (marker != null) {
                setState(marker.getLatLng())
            }
            },
        }),
        [],
        )
        const toggleDraggable = useCallback(() => {
        setDraggable((d) => !d)
        }, [])
        const map =  useMapEvents({
            click(e)  {   
            setCoordenadas({lat: e.latlng.lat, lng: e.latlng.lng}) 
            },            
        })


        
    



        return (
            coordenadas?
        <Marker
            key={coordenadas["lat"]}
            position={coordenadas}
            draggable={draggable}
            eventHandlers={eventHandlers}
            // position={position}
            ref={markerRef}
            icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}
            >
            <Popup minWidth={90} >
                <p>Lat:latlng</p>
            {/* <span onClick={toggleDraggable}>
                {draggable
                ? 'Marker is draggable'
                : 'Click here to make marker draggable'}
            </span> */}
            </Popup>
        </Marker>:null
        )
    }


    

    console.log(state.currentLocation,"curren")


    return (
        <div className="mapaform">
    <MapContainer center={state.currentLocation} zoom={10} scrollWheelZoom={true} style={{ height: '30vh', width: '100wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {/* <Markers places={places}/> */}
    {/* <LocationMarker/> */}
    <DraggableMarker />
  </MapContainer>
  </div>
  
  )


}

export default MapaForm;