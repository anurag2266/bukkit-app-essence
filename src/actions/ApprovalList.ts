export const GET_APPROVAL_LIST = 'GET_APPROVAL_LIST';
export const GET_APPROVAL_LIST_SUCCESS = 'GET_APPROVAL_LIST_SUCCESS';
export const GET_APPROVAL_LIST_FAIL = 'GET_APPROVAL_LIST_FAIL';

export const APPROVE = 'APPROVE';
export const APPROVE_FAIL = 'APPROVE_FAIL';

export const REJECT = 'REJECT';
export const REJECT_FAIL = 'REJECT_FAIL';


export function getApprovalList() {
  return {
    type: GET_APPROVAL_LIST,
  };
}

export function approve(id: number) {
  return {
    type: APPROVE,
    id,
  };
}

export function reject(id: number) {
  return {
    type: REJECT,
    id,
  };
}


