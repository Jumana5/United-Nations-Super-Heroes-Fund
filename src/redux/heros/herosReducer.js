
import { 
    HEROS_GET_REQUEST,
    HEROS_GET_SUCCESS,
    HEROS_GET_FAILURE,

    HEROS_SORT_REQUEST,
    HEROS_SORT_SUCCESS,
    HEROS_SORT_FAILURE,
} from "./herosConstants";

export const HERO_KEY = 'heroStore'

let initialState = {
    data:[],
    loading:false,
    errorMesage:''
}

export const herosReducer = (state = initialState, action) =>{
    let {type, payload} = action
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
                    data:payload
                }
                case HEROS_GET_FAILURE:
                    return{
                        ...state,
                        errorMesage:payload
                    }
                    default: return state
    }
}
