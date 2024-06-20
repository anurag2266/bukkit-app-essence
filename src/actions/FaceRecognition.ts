export const SEARCH_FACE = 'SEARCH_FACE';
export const SEARCH_FACE_SUCCESS = 'SEARCH_FACE_SUCCESS';
export const SEARCH_FACE_FAIL = 'SEARCH_FACE_FAIL';

export const CLEAR_FACE_TOKEN = 'CLEAR_FACE_TOKEN';

export function searchFace(filePath: string) {
  return {
    type: SEARCH_FACE,
    filePath
  };
}
