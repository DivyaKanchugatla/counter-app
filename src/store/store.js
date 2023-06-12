import { applyMiddleware, createStore } from "redux";
import counterReducer from "./reducers/Reducers";
import thunk from "redux-thunk"
import logger from "redux-logger"
import {composeWithDevTools} from "redux-devtools-extension"

const middleWare = applyMiddleware(thunk,logger)
const store = createStore(counterReducer,composeWithDevTools(middleWare))

export default store;