import { ActionTypes } from "./action-types"
import axios from "axios";

export const GET_ROBOS=()=>{//esta action me trae todos los paises.
    
    return async function (dispatch){
        const res= await axios.get("http://localhost:5000/customers");
    dispatch({
        type: ActionTypes.GET_ROBOS,
        payload: res.data,
    })
    }}