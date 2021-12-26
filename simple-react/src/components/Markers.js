import React from "react";
import { Marker } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet';


const Markers = (props)=>{
    const {robos} =props;
    console.log(robos,"robos")
    const markers=robos.map((place,i)=>(
        <Marker key={i} position={place.coordenadas} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})} />
    ))

    return markers && markers.length?(
        <div>
            return {markers}

        </div>
    ):null
}

export default Markers