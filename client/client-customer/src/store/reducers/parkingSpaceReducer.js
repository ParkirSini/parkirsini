
const initialState = { parkingSpaces: [], parkingSpace: {} };

function parkingSpaceReducer(state = initialState, action) {
    switch (action.type) {
        case "parkingSpace/getAll":
            return { ...state, parkingSpaces: action.payload };
        case "parkingSpace/getOne":
            return { ...state, parkingSpace: action.payload };
        default:
            return state;
    }
}

export default parkingSpaceReducer;