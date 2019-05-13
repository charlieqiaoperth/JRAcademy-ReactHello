import { ADD_WELCOME} from '../actions/addWelcomeAction'

const defaultState ={
    author:"",
    content:""
};

const welcome = (state=defaultState, action) => {
    switch(action.type) {
        case ADD_WELCOME:
            return Object.assign({}, state, {author:action.payload.author,content:action.payload.content});
        default:
            return state;
        }
    }

export default welcome;