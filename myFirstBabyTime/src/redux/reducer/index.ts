import {combineReducers} from 'redux';
import setUserState from './Setuser';

const rootReducer = combineReducers({
  setUserState,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
