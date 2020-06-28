const photosReducer = ( state = { list: [{ id: 0, title: "你好" }] }, action ) => {
    switch (action.type) {
        case 'LOAD_PHOTOS':
           return {
               ...state,
               list: action.payload
           } 
        default:
            return state
    } 
}
export default photosReducer