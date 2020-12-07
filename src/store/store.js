import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers/root';

const url = 'http://185.68.21.29:8000/api/';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({url})));

export default store;