import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import rootModule from '../modules/rootModule';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middleware);
const store = createStore(rootModule, enhancer);

export default store;
