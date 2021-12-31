import { ActionTypes } from "./action-types"
import axios from "axios";
import URLrequests from '../contantesURL'

export const GET_ROBOS=()=>{//esta action me trae todos los paises.
    
    return async function (dispatch){
        const res= await axios.get(`${URLrequests}customers`);
    dispatch({
        type: ActionTypes.GET_ROBOS,
        payload: res.data,
    })
    }}