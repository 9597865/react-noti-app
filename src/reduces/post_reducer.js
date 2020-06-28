const postReducer = (state = { list: [{ title: "你好" }] }, action) => {
    switch (action.type) {
      case "LOAD_POSTS":
        console.log('action.payload')
        console.log(action.payload)
        return {
          ...state,
          list: action.payload,
        };
      default:
        return state;
    }
};

export default postReducer;