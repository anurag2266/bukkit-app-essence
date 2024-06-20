import all from './all';
import discovered from './discovered';
import lessons from './lessons';
import { combineReducers } from 'redux';

export default combineReducers({
  all,
  discovered,
  lessons
});
