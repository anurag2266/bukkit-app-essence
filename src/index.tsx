// import React, { useState, useEffect, useMemo, ComponentType } from 'react';
// import { mapStateToProps, mapDispatchToProps } from './utils';
// import { Provider, connect } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { rootReducer, rootSaga, AppState } from 'store';
// import createSagaMiddleware from 'redux-saga';
// import { setupFetchers } from './modules/fetcher';
// import {
//   faceRecognitionSaga,
//   classStudentsSaga,
//   approvalListSaga,
//   attendanceSaga,
//   snapshotsSaga,
//   beaconsSaga,
//   classesSaga,
//   authSaga,
//   userSaga
// } from './sagas';
// import {
//   StudentCANavigator,
//   StudentDANavigator,
//   StaffCANavigator,
//   StaffDANavigator,
//   AuthNavigator,
//   LoginNavigator
// } from './navigation';
// import Bootsplash from 'react-native-bootsplash';
// import { StudentFullRole, StaffFullRole } from './constants/types';
// import withMountAction from 'utils/withMountAction';
// import { userLogin } from 'store/common/actions';

// const BOOTSPLASH_DURATION = 150;

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// setupFetchers(() => (store.getState() as AppState).Auth.authToken);

// sagaMiddleware.run(faceRecognitionSaga);
// sagaMiddleware.run(classStudentsSaga);
// sagaMiddleware.run(approvalListSaga);
// sagaMiddleware.run(attendanceSaga);
// sagaMiddleware.run(snapshotsSaga);
// sagaMiddleware.run(classesSaga);
// sagaMiddleware.run(beaconsSaga);
// sagaMiddleware.run(authSaga);
// sagaMiddleware.run(userSaga);

// sagaMiddleware.run(rootSaga);

// const MAP_FULL_ROLE_2_USER_NAVIGATOR: { [key: string]: ComponentType } = {
//   [StudentFullRole.DA]: StudentDANavigator,
//   [StudentFullRole.CA]: StudentCANavigator,
//   [StaffFullRole.CA]: StaffCANavigator,
//   [StaffFullRole.DA]: StaffDANavigator
// };

// const RootNavigator = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(({ loadAuthToken, loadUserData, Auth: auth, User: user }: any) => {
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     if (isLoading && auth.loaded) {
//       setLoading(false);
//     }

//     if (!auth.isLoggedIn && !isLoading) {
//       if (!auth.loaded && !auth.loading && !auth.error && !auth.authToken) {
//         loadAuthToken();
//         setLoading(true);
//       }
//       if (!user.loaded && !user.loading && !user.error && user.data === null) {
//         loadUserData();
//         setLoading(true);
//       }
//     }
//   }, [auth, user, loadAuthToken, loadUserData, isLoading]);

//   const Component: ComponentType | null = useMemo(() => {
//     if (isLoading) {
//       return null;
//     }
//     const fullRole = auth.authToken && user.data ? user.data.full_role : null;

//     if (fullRole) {
//       if (!auth.isLoggedIn) {
//         return LoginNavigator;
//       }

//       const UserNavigator = MAP_FULL_ROLE_2_USER_NAVIGATOR[fullRole];
//       return withMountAction(() => {
//         store.dispatch(userLogin(fullRole));
//       }, UserNavigator);
//     }

//     //return AuthNavigator;
//     return StaffDANavigator;
//   }, [auth, user, isLoading]);

//   useEffect(() => {
//     if (Component) {
//       Bootsplash.hide({ duration: BOOTSPLASH_DURATION });
//     }
//   }, [Component]);

//   return Component ? <Component /> : null;
// });

// const App = () => (
//   <Provider store={store}>
//     <RootNavigator />
//   </Provider>
// );

// export default App;



import React, { useState, useEffect, useMemo, ComponentType } from 'react';
import { mapStateToProps, mapDispatchToProps } from './utils';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer, rootSaga, AppState } from 'store';
import createSagaMiddleware from 'redux-saga';
import { setupFetchers } from './modules/fetcher';
import {
  faceRecognitionSaga,
  classStudentsSaga,
  approvalListSaga,
  attendanceSaga,
  snapshotsSaga,
  beaconsSaga,
  classesSaga,
  authSaga,
  userSaga
} from './sagas';
import {
  StudentCANavigator,
  StudentDANavigator,
  StaffCANavigator,
  StaffDANavigator,
  AuthNavigator,
  LoginNavigator
} from './navigation';
import Bootsplash from 'react-native-bootsplash';
import { StudentFullRole, StaffFullRole } from './constants/types';
import withMountAction from 'utils/withMountAction';
import { userLogin } from 'store/common/actions';

const BOOTSPLASH_DURATION = 150;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

setupFetchers(() => (store.getState() as AppState).Auth.authToken);

sagaMiddleware.run(faceRecognitionSaga);
sagaMiddleware.run(classStudentsSaga);
sagaMiddleware.run(approvalListSaga);
sagaMiddleware.run(attendanceSaga);
sagaMiddleware.run(snapshotsSaga);
sagaMiddleware.run(classesSaga);
sagaMiddleware.run(beaconsSaga);
sagaMiddleware.run(authSaga);
sagaMiddleware.run(userSaga);

sagaMiddleware.run(rootSaga);

const MAP_FULL_ROLE_2_USER_NAVIGATOR: { [key: string]: ComponentType } = {
  [StudentFullRole.DA]: StudentDANavigator,
  [StudentFullRole.CA]: StudentCANavigator,
  [StaffFullRole.CA]: StaffCANavigator,
  [StaffFullRole.DA]: StaffDANavigator
};

const RootNavigator = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ loadAuthToken, loadUserData, Auth: auth, User: user }: any) => {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading && auth.loaded) {
      setLoading(false);
    }

    if (!auth.isLoggedIn && !isLoading) {
      if (!auth.loaded && !auth.loading && !auth.error && !auth.authToken) {
        loadAuthToken();
        setLoading(true);
      }
      if (!user.loaded && !user.loading && !user.error && user.data === null) {
        loadUserData();
        setLoading(true);
      }
    }
  }, [auth, user, loadAuthToken, loadUserData, isLoading]);

  const Component: ComponentType | null = useMemo(() => {
    if (isLoading) {
      return null;
    }
    const fullRole = auth.authToken && user.data ? user.data.full_role : null;

    if (fullRole) {
      if (!auth.isLoggedIn) {
        return LoginNavigator;
      }

      const UserNavigator = MAP_FULL_ROLE_2_USER_NAVIGATOR[fullRole];
      return withMountAction(() => {
        store.dispatch(userLogin(fullRole));
      }, UserNavigator);
    }

    //return AuthNavigator;
    return StaffDANavigator
  }, [auth, user, isLoading]);

  useEffect(() => {
    if (Component) {
      Bootsplash.hide({ duration: BOOTSPLASH_DURATION });
    }
  }, [Component]);

  return Component ? <Component /> : null;
});

const App = () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);

export default App;
