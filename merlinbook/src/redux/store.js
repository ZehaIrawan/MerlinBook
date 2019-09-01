import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/index';

const middleWares = process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined;

const configureStore = () => createStore(mainReducer, middleWares);

export default configureStore;
