import { takeEvery, put } from 'redux-saga/effects';
import Attendance from 'models/Attendance';

import * as ACTIONS from '../actions';

function* searchFace(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.searchFace(action.filePath);
    yield put({ type: ACTIONS.SEARCH_FACE_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.SEARCH_FACE_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* faceRecognitionSaga() {
  yield takeEvery(ACTIONS.SEARCH_FACE, searchFace);
}
