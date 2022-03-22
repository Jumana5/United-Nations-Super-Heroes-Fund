
import { 
    HEROS_GET_REQUEST,
    HEROS_GET_SUCCESS,
    HEROS_GET_FAILURE,

    HEROS_SORT_REQUEST,
    HEROS_SORT_SUCCESS,
    HEROS_SORT_FAILURE,
} from "./herosConstants";

import Axios from "axios";
import data from "../../data.json";

export const getHeros =() =>{
return async (dispatch) =>{
   try{
       dispatch({type: HEROS_GET_REQUEST})

       dispatch({type:HEROS_GET_SUCCESS, payload:data})
   }
   catch(error){
       dispatch({type:HEROS_GET_FAILURE, payload:error})
   }
}
}

export const sortHeros =() =>{
    return async (dispatch) =>{
       try{
           dispatch({type: HEROS_SORT_REQUEST})
            //TODO: sort the list.
           dispatch({type:HEROS_SORT_SUCCESS, payload:data})
       }
       catch(error){
           dispatch({type:HEROS_SORT_FAILURE, payload:error})
       }
    }
    }
