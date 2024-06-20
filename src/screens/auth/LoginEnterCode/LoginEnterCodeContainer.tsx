// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import {
//   mapStateToProps,
//   mapDispatchToProps
// } from '../../../utils';

// import LoginEnterCode from './LoginEnterCode';
// import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

// import {
//   NavigationScreenProps,
//   NavigationScreenConfigProps
// } from 'react-navigation';
// import { localization, screens } from '../../../constants';

// interface Props extends NavigationScreenProps {
//   Auth: any;
//   signIn: Function;
// }
// const LoginEnterCodeContainer = ({ navigation, Auth, signIn }: Props) => {
//   const [ isLoaded, setLoaded ] = useState(false);
//   const handleFulfillPasscode = (passcode: string) => {
//     setLoaded(false);
//     signIn(Auth.email, Auth.slug, passcode.toUpperCase())
//   }
//   if (!isLoaded && !Auth.loading) {
//     if (Auth.loaded && Auth.authToken && Auth.authToken.length > 0) {
//       setLoaded(true);
//       navigation.navigate(screens.auth.createPasscode);
//     } else if (Auth.error || (Auth.loaded && Auth.colleges.length === 0)) {
//       setLoaded(true);
//     }  
//   }

//   return <LoginEnterCode onFulfillPasscode={handleFulfillPasscode} />;
// };

// LoginEnterCodeContainer.navigationOptions = ({
//   navigation
// }: NavigationScreenConfigProps) => ({
//   // header: (
//   //   <SpeechBubbleTitleBar
//   //     title={localization.crackTheCode}
//   //     rightIcon="close"
//   //     onRightIconPress={() => navigation.goBack()}
//   //   />
//   // )
//   header: null
// });


//export default connect(mapStateToProps, mapDispatchToProps)(LoginEnterCodeContainer);


import React from 'react';
import LoginEnterCode from './LoginEnterCode';
import { SpeechBubbleTitleBar } from '../../../components';

import { localization } from '../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const LoginEnterCodeContainer = (props: NavigationScreenProps) => (
  <LoginEnterCode {...props} />
);

LoginEnterCodeContainer.navigationOptions = {
  //header: <SpeechBubbleTitleBar title={localization.hiThere} />
  header: null
};

export default LoginEnterCodeContainer;
