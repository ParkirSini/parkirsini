// <<<<<<< malik-1

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
// =======
// const initialState = {
//   data: [],
//   detail: {}
// };

// export const parkingSpaceReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'parkingSpace/fetch':
//       return {
//         ...state,
//         data: action.payload
//       }

//     default:
//       return state
//   }
// };

// export const parkingSpaceDetailReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'parkingSpaceDetail/fetch':
//       return {
//         ...state,
//         detail: action.payload
//       }

//     default:
//       return state
//   }
// };


// >>>>>>> dev
