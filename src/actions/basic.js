


const setXIndex=(data) => {
    return {
        type:"SET_X",
        payload:data
    }
}
const setYIndex=(data) => {
    return {
        type:"SET_Y",
        payload:data
    }
}
const setFace=(data) => {
    return {
        type:"SET_DIR",
        payload:data
    }
}
export const setPlacing = (command) => {
    return (dispatch) => {

        let arr = command.split(' ')
    
        dispatch(setXIndex(arr[1]))
        dispatch(setYIndex(arr[2]))
        dispatch(setFace(arr[3]))
        console.log('KKKKKKKKKK', arr)
    }
}