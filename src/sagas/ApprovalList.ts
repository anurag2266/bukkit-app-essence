import { takeEvery, put } from 'redux-saga/effects';
import { Attendance } from '../models';

import * as ACTIONS from '../actions';

function* getApprovalList(action: any) {
  try {
    const model = yield Attendance.getInstance();
    const data = yield model.getApprovalList();
    yield put({ type: ACTIONS.GET_APPROVAL_LIST_SUCCESS, data });
  } catch (error) {
    yield put({ type: ACTIONS.GET_APPROVAL_LIST_FAIL, error });
  }
}

function* approve(action: any) {
  try {
    const model = yield Attendance.getInstance();
    yield model.approve(action.id);
    yield put({ type: ACTIONS.GET_APPROVAL_LIST, action });
  } catch (error) {
    yield put({ type: ACTIONS.APPROVE_FAIL, error });
  }
}

function* reject(action: any) {
  try {
    const model = yield Attendance.getInstance();
    yield model.reject(action.id);
    yield put({ type: ACTIONS.GET_APPROVAL_LIST, action });
  } catch (error) {
    yield put({ type: ACTIONS.REJECT_FAIL, error });
  }
}

/*
 * binds actions to generators
 */
export function* approvalListSaga() {
  yield takeEvery(ACTIONS.REJECT, reject);
  yield takeEvery(ACTIONS.APPROVE, approve);
  yield takeEvery(ACTIONS.GET_APPROVAL_LIST, getApprovalList);
}
