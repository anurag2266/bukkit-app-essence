import { combineReducers } from 'redux';
import createLesson from './create-lesson';
import currentLesson from './current-lesson';
import history from './history';
import schedule from './schedule';
import summary from './summary';

export default combineReducers({
  createLesson,
  currentLesson,
  history,
  schedule,
  summary
});
