import axios from 'axios';
import {
   singUpRequest, 
   singUpSuccess,
   singUpError,
   singInRequest,
   singInSuccess,
   singInError,
   singOutRequest,
   singOutSuccess
} from './actions';
import * as selectors from './selectors';

axios.defaults.baseURL = "http://localhost:400";

const setAuthHeader = (token) => {
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const clearAuthHeader = (token) => {
   axios.defaults.headers.common['Authorization'] = null;
}
