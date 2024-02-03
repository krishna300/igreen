import { createStore, applyMiddleware  } from 'redux';
import {thunk} from 'redux-thunk';
import basicReducer from './reducers/basic';

const store = createStore(basicReducer, applyMiddleware(thunk));

export default store;