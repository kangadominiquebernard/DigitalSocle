import { combineReducers } from 'redux';

import UiReducer from '../features/ui/reducer';
import HomeReducer from '../features/home/reducer';
import Dashboard from '../features/dashboard/reducer';




export default combineReducers({

  uireducer: UiReducer,
  homereducer: HomeReducer,
  dashboardreducer: Dashboard,

});
