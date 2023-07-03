
const initialState = { reviews: [], review: {} };

function parkingSpaceReducer(state = initialState, action) {
    switch (action.type) {
        case "review/getAll":
            return { ...state, reviews: action.payload };
        case "review/getOne":
            return { ...state, review: action.payload };
        default:
            return state;
    }
}

export default parkingSpaceReducer;