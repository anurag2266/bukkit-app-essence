import * as ACTIONS from '../actions';

export type FaceRecognitionState = {
  faceToken: string;
  loading: boolean;
  loaded: boolean;
};

const newState: FaceRecognitionState = {
  faceToken: '',
  loading: false,
  loaded: false
};

export function FaceRecognition(state: FaceRecognitionState, action: any) {
  switch (action.type) {
    case ACTIONS.SEARCH_FACE: {
      return {
        ...state,
        loading: true
      };
    }
    case ACTIONS.SEARCH_FACE_SUCCESS: {
      return {
        ...state,
        faceToken: action.data.data.face_token,
        loading: false,
        loaded: true
      };
    }
    case ACTIONS.SEARCH_FACE_FAIL: {
      return {
        ...state,
        faceToken: '',
        loading: false,
        loaded: false
      };
    }

    case ACTIONS.CLEAR_FACE_TOKEN: {
      return {
        ...state,
        faceToken: '',
        loading: false,
        loaded: false
      };
    }

    default:
      return state || newState;
  }
}
