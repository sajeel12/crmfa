import { combineReducers } from "redux";
import itemReducer from './itemReducer';
import leadReducer from './leadReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import agentReducer from "./agentReducer";
import mailReducer from "./mailReducer";


export default combineReducers({
    item: itemReducer,
    lead: leadReducer,
    error: errorReducer,
    auth: authReducer,
    agent: agentReducer,
    mail: mailReducer

})
