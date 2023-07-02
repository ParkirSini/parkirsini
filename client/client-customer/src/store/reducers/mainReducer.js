import {combineReducers} from "redux";
import {parkingSpaceDetailReducer, parkingSpaceReducer} from "./parkingSpaceReducer.js";
import {landlordDetailReducer, landlordsReducer} from "./landlordsReducer.js";

const mainReducer = combineReducers({
  data: parkingSpaceReducer,
  detail: parkingSpaceDetailReducer,
  landlords: landlordsReducer,
  landlordDetail: landlordDetailReducer
})

export default mainReducer
