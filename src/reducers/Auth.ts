import * as ACTIONS from '../actions';

export type Auth = {
  data: any[];
  email: string;
  slug: string;
  authToken: string;
  colleges: any[];
  loading: boolean;
  loaded: boolean;
  error: boolean;
  isLoggedIn: boolean;
};

const newState: Auth = {
  data: [],
  colleges: [],
  email: '',
  slug: '',
  authToken: '',
  loading: false,
  loaded: false,
  error: false,
  isLoggedIn: false
};

export function Auth(state: Auth, action: any) {
  switch (action.type) {
    case ACTIONS.AUTH_SET_LOGGEDIN: {
      return {
        ...state,
        isLoggedIn: action.isLoggedIn
      };
    }

    case ACTIONS.AUTH_GET_USER_COLLEGES: {
      return {
        ...state,
        email: action.email,
        loaded: false,
        loading: true,
        error: false
      };
    }
    case ACTIONS.AUTH_GET_USER_COLLEGES_SUCCESS: {
      return {
        ...state,
        colleges: action.data.data,
        loading: false,
        loaded: action.data.data.length > 0,
        error: action.data.data.length === 0
      };
    }

    case ACTIONS.AUTH_SEND_ONETIME_PASSWORD: {
      return {
        ...state,
        slug: action.slug,
        loaded: false,
        loading: true,
        error: false
      };
    }
    case ACTIONS.AUTH_SEND_ONETIME_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        error: false
      };
    }

    case ACTIONS.AUTH_SIGN_IN: {
      return {
        ...state,
        loaded: false,
        loading: true,
        error: false
      };
    }
    case ACTIONS.AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        authToken: action.authToken,
        loading: false,
        loaded: true,
        error: false
      };
    }

    case ACTIONS.AUTH_LOAD_TOKEN_SUCCESS: {
      return {
        ...state,
        authToken: action.authToken,
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.AUTH_CLEAR_TOKEN_SUCCESS: {
      return {
        ...state,
        authToken: '',
        loading: false,
        loaded: true,
        error: false
      };
    }
    case ACTIONS.AUTH_STORE_TOKEN: {
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.authToken,
        loaded: false,
        loading: true,
        error: false
      };
    }

    case ACTIONS.AUTH_SIGN_IN_FAIL:
    case ACTIONS.AUTH_LOAD_TOKEN_FAIL:
    case ACTIONS.AUTH_STORE_TOKEN_FAIL:
    case ACTIONS.AUTH_CLEAR_TOKEN_FAIL:
    case ACTIONS.AUTH_GET_USER_COLLEGES_FAIL:
    case ACTIONS.AUTH_SEND_ONETIME_PASSWORD_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true
      };
    }

    default:
      return state || newState;
  }
}
