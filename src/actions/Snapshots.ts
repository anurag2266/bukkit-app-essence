export const GET_SNAPSHOT = 'GET_SNAPSHOT';
export const GET_SNAPSHOT_SUCCESS = 'GET_SNAPSHOT_SUCCESS';
export const GET_SNAPSHOT_FAIL = 'GET_SNAPSHOT_FAIL';

export const DELETE_SNAPSHOT = 'DELETE_SNAPSHOT';
export const DELETE_SNAPSHOT_FAIL = 'DELETE_SNAPSHOT_FAIL';

export const UPDATE_SNAPSHOT = 'UPDATE_SNAPSHOT';
export const UPDATE_SNAPSHOT_FAIL = 'UPDATE_SNAPSHOT_FAIL';

export const DELETE_SINGLE_SNAPSHOT = 'DELETE_SINGLE_SNAPSHOT';
export const DELETE_SINGLE_SNAPSHOT_FAIL = 'DELETE_SINGLE_SNAPSHOT_FAIL';

export function getSnapshotByClassId(classId: number) {
  return {
    type: GET_SNAPSHOT,
    classId,
  };
}

export function deleteSnapshotByClassId(classId: number) {
    return {
      type: DELETE_SNAPSHOT,
      classId,
    };
}
  
export function updateSnapshotByClassId(classId: number) {
    return {
      type: UPDATE_SNAPSHOT,
      classId,
    };
}

export function deleteSingleSnapshotStudent(classId: number, id: number) {
    return {
      type: DELETE_SINGLE_SNAPSHOT,
      classId,
      id,
    };
}

