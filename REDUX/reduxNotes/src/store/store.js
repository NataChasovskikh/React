import createStore from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootModule from './module/rootModule.js';

const enhancer = composeWithDevTools();

const store = createStore(rootModule, enhancer);


export default store;
