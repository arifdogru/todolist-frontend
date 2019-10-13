const initialState = {
    tasks: []
};

function rootReducer(state = initialState, action) {
    if(action.type === "ADD_TASK") {
        return Object.assign({}, state, {
            tasks: state.tasks.concat(action.payload)
          });
    }
    return state;
};

export default rootReducer;