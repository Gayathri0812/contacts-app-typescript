import { combineReducers } from 'redux';
import { contactReducer } from "./contact"

export default combineReducers<any, any>({
    contact: contactReducer
});