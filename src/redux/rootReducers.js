import { herosReducer , sortHerosReducer} from "./heros/herosReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  heros:herosReducer,
  sortedHeros: sortHerosReducer, 
})

export {rootReducer}