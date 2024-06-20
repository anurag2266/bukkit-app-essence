import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../utils';

import ConfirmSelfie from './ConfirmSelfie';

import { NavigationScreenProps } from 'react-navigation';

interface Props extends NavigationScreenProps {
  addUser: Function;
  User: any;
  storeAuthToken: Function;
  setLoggedIn: Function;
  Auth: any;
}
const ConfirmSelfieContainer = (props: Props) => {
  const [ isLoaded, setLoaded ] = useState(false);

  const handleUseThisPhoto = () => {
    const photo = props.navigation.getParam('photo');
    props.addUser(photo.uri);
    props.storeAuthToken(props.Auth.authToken);
    setLoaded(false);
  };

  if (!isLoaded && props.User.loaded && props.User.data !== null && !props.User.error) {
    props.storeAuthToken(props.Auth.authToken);
    setLoaded(true);
  }
  return <ConfirmSelfie onUseThisPhoto={handleUseThisPhoto} {...props} />
};

ConfirmSelfieContainer.navigationOptions = {
  header: null
};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmSelfieContainer);
