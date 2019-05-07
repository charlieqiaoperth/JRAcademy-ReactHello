
// const deafultState = { count:0};

const counter = (state = { count:0}, action) =>{
    switch(action.type) {
        case "INCEREMENT":            
            return Object.assign({}, state, {count: state.count + action.payload});
        case "DECREMENT":
            return Object.assign({}, state, {count:state.count - action.payload});
        default:
            return state;
    }
}

export default counter;