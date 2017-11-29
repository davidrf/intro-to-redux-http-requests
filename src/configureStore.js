import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const enhancer = applyMiddleware(thunk);
  return createStore(rootReducer, undefined, enhancer);
};

export default configureStore;
