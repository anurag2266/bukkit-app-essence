export const AUTH_GET_USER_COLLEGES = "AUTH_GET_USER_COLLEGES";
export const AUTH_GET_USER_COLLEGES_SUCCESS = "AUTH_GET_USER_COLLEGES_SUCCESS";
export const AUTH_GET_USER_COLLEGES_FAIL = "AUTH_GET_USER_COLLEGES_FAIL";

export const AUTH_SEND_ONETIME_PASSWORD = "AUTH_SEND_ONETIME_PASSWORD";
export const AUTH_SEND_ONETIME_PASSWORD_SUCCESS =
  "AUTH_SEND_ONETIME_PASSWORD_SUCCESS";
export const AUTH_SEND_ONETIME_PASSWORD_FAIL =
  "AUTH_SEND_ONETIME_PASSWORD_FAIL";

export const AUTH_SIGN_IN = "AUTH_SIGN_IN";
export const AUTH_SIGN_IN_SUCCESS = "AUTH_SIGN_IN_SUCCESS";
export const AUTH_SIGN_IN_FAIL = "AUTH_SIGN_IN_FAIL";

export const AUTH_LOAD_TOKEN = "AUTH_LOAD_TOKEN";
export const AUTH_LOAD_TOKEN_SUCCESS = "AUTH_LOAD_TOKEN_SUCCESS";
export const AUTH_LOAD_TOKEN_FAIL = "AUTH_LOAD_TOKEN_FAIL";

export const AUTH_STORE_TOKEN = "AUTH_STORE_TOKEN";
export const AUTH_STORE_TOKEN_SUCCESS = "AUTH_STORE_TOKEN_SUCCESS";
export const AUTH_STORE_TOKEN_FAIL = "AUTH_STORE_TOKEN_FAIL";

export const AUTH_CLEAR_TOKEN = "AUTH_CLEAR_TOKEN";
export const AUTH_CLEAR_TOKEN_SUCCESS = "AUTH_CLEAR_TOKEN_SUCCESS";
export const AUTH_CLEAR_TOKEN_FAIL = "AUTH_CLEAR_TOKEN_FAIL";

export const AUTH_SET_LOGGEDIN = "AUTH_SET_LOGGEDIN";

export function getUserColleges(email: string) {
  return {
    type: AUTH_GET_USER_COLLEGES,
    email
  };
}

export function sendOneTimePassword(email: string, slug: string) {
  return {
    type: AUTH_SEND_ONETIME_PASSWORD,
    email,
    slug
  };
}

export function signIn(email: string, slug: string, password: string) {
  return {
    type: AUTH_SIGN_IN,
    email,
    slug,
    password
  };
}

export function loadAuthToken() {
  return {
    type: AUTH_LOAD_TOKEN
  };
}

export function storeAuthToken(authToken: string) {
  return {
    type: AUTH_STORE_TOKEN,
    authToken
  };
}

export function clearAuthToken() {
  return {
    type: AUTH_CLEAR_TOKEN
  };
}

export function setLoggedIn(isLoggedIn: boolean) {
  return {
    type: AUTH_SET_LOGGEDIN,
    isLoggedIn
  };
}
