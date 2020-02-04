import { combineReducers } from 'redux';

import demoMiddlewareApi from 'global/reducers/demoMiddlewareApi';
import RootReducer from 'global/reducers/root';


export default combineReducers({

  rootreducer: RootReducer,
  demomiddlewareapi: demoMiddlewareApi
});
