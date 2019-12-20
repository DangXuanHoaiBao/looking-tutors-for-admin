import { combineReducers } from 'redux';
import authentication  from './authentication-reducer';
import registration from './registration-reducer';
import users from './user-reducer';
import alert from './alert-reducer';
import ThemeOptions from './theme-reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert, 
    ThemeOptions
});
export default rootReducer;
