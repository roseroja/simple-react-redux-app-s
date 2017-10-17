import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
//import AllFormReducer from './reducer-all-form';

const allReducers = combineReducers({
  activeUser: ActiveUserReducer,
  users: UserReducer
});

export default allReducers;
