
import { 
    HEROS_GET_REQUEST,
    HEROS_GET_SUCCESS,
    HEROS_GET_FAILURE,
    HEROS_SET_SORT,
} from "./herosConstants";



let initialState = {
    heros:[],
    loading:false,
    errorMesage:''
}

export const herosReducer = (state = initialState, action) =>{
    let {type, payload} = action;
    switch(type){
        case HEROS_GET_REQUEST:
            return{
                ...state,
                loading:true
            }
        case HEROS_GET_SUCCESS:
            return{
                ...state,
                loading:false,
                heros:payload
            }
        case HEROS_GET_FAILURE:
            return{
                ...state,
                errorMesage:payload
            }
        default: 
            return {
              ...initialState
            };
    
    }
}

export const sortHerosReducer = (state = {isSorted: false}, action) =>{
    let {type, payload} = action;
    switch(type){
        case HEROS_SET_SORT:
            return {isSorted:payload,};
      
        default: 
            return state;
    
    }
}

