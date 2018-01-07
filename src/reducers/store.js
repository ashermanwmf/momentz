import { combineReducers, createStore } from 'redux';

import libraryReducer from './libraryReducer.js';
import sessionReducer from './sessionReducer.js';

const rootReducer = combineReducers({
  libraryState: libraryReducer,
  sessionState: sessionReducer
});

export default createStore(rootReducer)
