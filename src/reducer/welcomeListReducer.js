

import { GET_WELCOME_SUCESS} from '../actions/addWelcomeAction';

const defaultState = [
    
]

const welcomeList = (state=defaultState, action) => {
    switch(action.type) {
        // case ADD_WELCOME:
        //     return state.concat(action.payload);
        case GET_WELCOME_SUCESS:
           return action.payload.welcomeList
        default:
        return state;
    }
}

export default welcomeList;