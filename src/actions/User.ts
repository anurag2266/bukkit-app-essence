export const USER_ADD_USER = 'USER_ADD_USER';
export const USER_ADD_USER_SUCCESS = 'USER_ADD_USER_SUCCESS';
export const USER_ADD_USER_FAIL = 'USER_ADD_USER_FAIL';

export const USER_STORE_USER = 'USER_STORE_USER';
export const USER_STORE_USER_SUCCESS = 'USER_STORE_USER_SUCCESS';
export const USER_STORE_USER_FAIL = 'USER_STORE_USER_FAIL';

export const USER_LOAD_USER = 'USER_LOAD_USER';
export const USER_LOAD_USER_SUCCESS = 'USER_LOAD_USER_SUCCESS';
export const USER_LOAD_USER_FAIL = 'USER_LOAD_USER_FAIL';

export const USER_CLEAR_USER = 'USER_CLEAR_USER';
export const USER_CLEAR_USER_SUCCESS = 'USER_CLEAR_USER_SUCCESS';
export const USER_CLEAR_USER_FAIL = 'USER_CLEAR_USER_FAIL';




export function addUser(filePath: string) {
  return {
    type: USER_ADD_USER,
    filePath,
  };
}

export function loadUserData() {
  return {
    type: USER_LOAD_USER,
  };
}


export function storeUserData(userData: string) {
  return {
      type: USER_STORE_USER,
      userData,
  };
}

export function clearUserData() {
  return {
      type: USER_CLEAR_USER,
  };
}
  
  
  
