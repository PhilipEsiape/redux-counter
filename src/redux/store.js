import counterReducer from "./reducer/counterReducer";
import { legacy_createStore } from "redux";

const store = legacy_createStore(counterReducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )

export default store;