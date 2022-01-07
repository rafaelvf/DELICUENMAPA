import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "./MapView.css"
// import 'leaflet/dist/leaflet.css'
import Markers from "./Markers";
import {places} from "../data.json";
import {useSelector,useDispatch} from "react-redux";
import {GET_ROBOS} from "../redux/actions"

const MapView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
   
      dispatch(GET_ROBOS());
    }, []);

    const {robos}=useSelector((state)=>state.allRobos)
    const [state,setState]= useState({
        currentLocation:{lat:"-2.170998",lng:"-79.922356"}
    })
    console.log(state.currentLocation,"aldkj")
    return <MapContainer center={state.currentLocation} zoom={10} scrollWheelZoom={true} style={{ height: '85vh', width: '100wh' }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Markers robos={robos}/>
  </MapContainer>


}

export default MapView;