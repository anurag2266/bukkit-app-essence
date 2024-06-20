import * as ACTIONS from '../actions';

export type ApprovalList = {
  data: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
};

const newState: ApprovalList = {
  data: [],
  loading: false,
  loaded: false,
  error: false
};

export function ApprovalList(state: ApprovalList, action: any): ApprovalList {
  switch (action.type) {
    case ACTIONS.GET_APPROVAL_LIST: {
      return {
        ...state,
        loading: true,
        error: false
      };
    }
    case ACTIONS.GET_APPROVAL_LIST_SUCCESS: {
      return {
        ...state,
        data: action.data.data,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.REJECT_FAIL:
    case ACTIONS.APPROVE_FAIL:
    case ACTIONS.GET_APPROVAL_LIST_FAIL: {
      return {
        ...state,
        data: [],
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state || newState;
  }
}
