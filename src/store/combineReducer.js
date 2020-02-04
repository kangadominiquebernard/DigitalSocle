import { combineReducers } from 'redux';

// How to::MiddlewareAPI
import demoMiddlewareApi from 'global/reducers/demoMiddlewareApi';
import RootReducer from 'global/reducers/root';


export default combineReducers({

  rootreducer: RootReducer,

  // How to::MiddlewareAPI
  demomiddlewareapi: demoMiddlewareApi
});
