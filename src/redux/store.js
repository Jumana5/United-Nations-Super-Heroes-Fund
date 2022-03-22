import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const composeEnhancer = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunk),
  )
  );


export {store}