
import { combineReducers } from "redux";
import parkingSpaceReducer from "./parkingSpaceReducer";

const mainReducer = combineReducers({
    parkingSpace: parkingSpaceReducer
});

export default mainReducer;