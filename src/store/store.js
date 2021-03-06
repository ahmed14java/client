import { createStore , applyMiddleware , compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from '../reducer';


const initialState = {};
const middleWare = [thunk];

let store;

const ReactReduxDevTools =  window.__REDUX_DEVTOOLS_EXTENSION__ &&
window.__REDUX_DEVTOOLS_EXTENSION__();

store = createStore(rootReducer , initialState , compose(applyMiddleware(...middleWare) , ReactReduxDevTools));

export default store;