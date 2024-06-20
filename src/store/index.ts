import { rootReducer } from './reducers';
import { rootSaga } from './sagas';
// @todo: move store creation here

export type AppState = ReturnType<typeof rootReducer>;

export { rootReducer, rootSaga };
