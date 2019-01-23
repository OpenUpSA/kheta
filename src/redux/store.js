import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';

import initialState from './initialState.json';
import user from './modules/user';
import tasks from './modules/tasks';
import storage from './modules/storage';


const persistKeys = [
  'storage',
  'user',
  'tasks',
];


const initLocalStorage = () => persistState(persistKeys, { key: 'state' });
const isNode = typeof window === 'undefined';


const rawReducers = {
  storage,
  user,
  tasks,
};


const reducers = combineReducers(rawReducers);
const middleware = applyMiddleware(thunk);


const createEnhancers = () => {
  if (isNode) {
    return composeWithDevTools(middleware);
  }

  return composeWithDevTools(middleware, initLocalStorage());
};


export default createStore(reducers, initialState, createEnhancers());
