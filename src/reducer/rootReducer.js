import { combineReducers } from 'redux';
import counter from './counterReducer';
// import welcome from './welcomeReducer';
import welcomeList from './welcomeListReducer';

const rootReducer = combineReducers(
    {
        counter,
        welcomeList
    }
);
export default rootReducer;