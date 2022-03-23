
import { 
    HEROS_GET_REQUEST,
    HEROS_GET_SUCCESS,
    HEROS_GET_FAILURE,
    HEROS_SET_SORT
   
} from "./herosConstants";

import Axios from "axios";
import data from "../../data.json";

export const getHeros =() =>{
return async (dispatch) =>{
   try{
       dispatch({type: HEROS_GET_REQUEST});
       dispatch({type:HEROS_GET_SUCCESS, payload:data});
   }
   catch(error){
       dispatch({type:HEROS_GET_FAILURE, payload:error});
   }
}
}


export const setSortHeros =(isSort) =>{
  return async (dispatch) =>{
    dispatch({type:HEROS_SET_SORT, payload:isSort});

  }
}