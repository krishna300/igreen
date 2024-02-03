const initialState = {
    xIndex:null,
    yIndex:null,
    face:null,
}

const basicReducer = (state=initialState, action) => {
    switch (action.type) {
        case "SET_X":
            return {...state, xIndex:action.payload}
        case "SET_Y":
            console.log("YINDEX LOGGGGG ")
            return {...state, yIndex:action.payload}
        case "SET_DIR":
            return {...state, face:action.payload}
        case "ON_START":
            return state
        default:
            return state
    }
}

export default basicReducer