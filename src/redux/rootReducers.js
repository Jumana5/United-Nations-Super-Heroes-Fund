import { herosReducer, HERO_KEY } from "./heros/herosReducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
  [HERO_KEY]:herosReducer
})

export {rootReducer}