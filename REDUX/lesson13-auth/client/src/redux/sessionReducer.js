import { combineReducers} from 'redux';
import {actionTypes} from './actions';


// session {
//    user: null,
//    isAuthenticated: false,
//    isAuthenticating: false,
//    error: null,
//    token
// }

const user = (state = null, {type, payload}) => {
   switch (type) {
      case actionTypes.SIGNUPSUCCESS: 
      case actionTypes.SIGNINSUCCESS: 
         return payload.user;
      case actionTypes.SIGNOUTSUCCESS: return null;

      default: return state;
   }
};

const isAuthenticated = (state = false, {type, payload}) => {
   switch (type) {
      case actionTypes.SIGNUPSUCCESS: 
      case actionTypes.SIGNINSUCCESS: 
         return true;

      case actionTypes.SIGNUPERROR: 
      case actionTypes.SIGNINERROR: 
      case actionTypes.SIGNOUTSUCCESS: 
         return false;
      

      default: return state;
   }
};

const token = (state = null, {type, payload}) => {
   switch (type) {
      case actionTypes.SIGNUPSUCCESS: 
      case actionTypes.SIGNUPSUCCESS:       
         return payload.token;

      case actionTypes.SIGNUPERROR: 
      case actionTypes.SIGNINERROR: 
      case actionTypes.SIGNOUTSUCCESS: 
         return null;

      default: return state;
   }
};

export default combineReducers({user, isAuthenticated, token});