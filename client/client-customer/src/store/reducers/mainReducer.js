
import {combineReducers} from "redux";
import {
  parkingSpaceDetailReducer,
  parkingSpaceReducer,
  parkingSpaceReducerByLandlord,
  parkingSpaceRelation
} from "./parkingSpaceReducer.js";
import {landlordDetailReducer, landlordsReducer} from "./landlordsReducer.js";
import {facilityDetailReducer, reviewDetailReducer} from "./reviewReducer.js";

const mainReducer = combineReducers({
  data: parkingSpaceReducer,
  dataByLandlord: parkingSpaceReducerByLandlord,
  detail: parkingSpaceDetailReducer,
  landlords: landlordsReducer,
  landlordDetail: landlordDetailReducer,
  reviewDetail: reviewDetailReducer,
  facilityDetail: facilityDetailReducer,
  relation: parkingSpaceRelation
})


export default mainReducer;