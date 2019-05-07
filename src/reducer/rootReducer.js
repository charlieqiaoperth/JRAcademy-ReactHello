import { combineReducers } from 'redux';
import counter from './counterReducer';
import welcome from './welcomeReducer';

const rootReducer = combineReducers(
    {
        counter:counter,
        welcome:welcome
    }
);
export default rootReducer;