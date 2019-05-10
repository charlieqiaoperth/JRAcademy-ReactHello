
// const deafultState = { count:0};

const counter = (state = {count:0}, action) =>{
    switch(action.type) {
        case "INCREMENT":            
            return Object.assign({}, state, {count: state.count + action.payload.diff});
        case "DECREMENT":
            return Object.assign({}, state, {count: state.count - action.payload.diff});
        default:
            return state;
    }
}

export default counter;