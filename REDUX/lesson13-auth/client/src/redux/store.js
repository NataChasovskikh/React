import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';// defaults to localStorage for web and AsyncStorage for react-native
import { composeWithDevTools } from 'redux-devtools-extension'; 
import sessionReducer from './sessionReducer';

const rootPersistConfig = {
   key: 'root',
   storage: storage,
   whitelist: ['card'] 
}; 

const sessionPersistConfig = {
   key: 'session',
   storage: storage,
   whitelist: ['token'] 
};

const rootReducer = combineReducers({
   session: persistReducer(sessionPersistConfig, sessionReducer),
   card: (state=[]) => state
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const middleware = [thunk];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

export const store = createStore(rootReducer, enhancer); 

export const persistor = persistStore(store);