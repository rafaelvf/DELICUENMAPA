import { ActionTypes } from "./action-types"

const initialState ={
    robos:{}
}

export const reducer = (state=initialState,action)=>{
    switch(action.type){
        case ActionTypes.GET_ROBOS:
            return{...state,
                robos:action.payload,//eesta la que va cambiando
                // everyCountry:action.payload//esta es la que no tengo que modificar
            } 
                    
        default:
            return state;
    }
}
