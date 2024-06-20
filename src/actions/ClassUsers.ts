export const GET_CLASS_USERS = 'GET_CLASS_USERS';
export const GET_CLASS_USERS_SUCCESS = 'GET_CLASS_USERS_SUCCESS';
export const GET_CLASS_USERS_FAIL = 'GET_CLASS_USERS_FAIL';


export function getUsersByClass(classId: number) {
  return {
    type: GET_CLASS_USERS,
    classId,
  };
}

