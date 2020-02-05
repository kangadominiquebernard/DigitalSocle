import { combineReducers } from 'redux';

//import demoMiddlewareApi from './middlewares/MiddleWareAPI/demoMiddlewareApi';
import RootReducer from '../features/ui/reducer';


export default combineReducers({

  rootreducer: RootReducer,
  //demomiddlewareapi: demoMiddlewareApi
});
