const initialState = {
    todos: []
};

function rootReducer(state = initialState, action) {
    if(action.type === "ADD_TASK") {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
          });
    }
    return state;
};

export default rootReducer;