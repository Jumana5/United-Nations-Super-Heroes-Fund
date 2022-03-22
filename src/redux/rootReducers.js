import { herosReducer, HERO_KEY } from "./redux/herosReducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
  [HERO_KEY]:herosReducer
})

export {rootReducer}