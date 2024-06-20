// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import {
//   mapStateToProps,
//   mapDispatchToProps
// } from '../../../utils';

// import Activation from './Activation';
// import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

// import {
//   NavigationScreenProps,
//   NavigationScreenConfigProps
// } from 'react-navigation';
// import { localization, screens } from '../../../constants';

// interface Props extends NavigationScreenProps {
//   getUserColleges: Function;
//   Auth: any;
// }

// const ActivationContainer = ({
//   navigation,
//   getUserColleges,
//   Auth
// }: Props) => {
//   const [ loaded, setLoaded ] = useState(false);
//   const handleConfirmEmail = (email: string) => {
//     getUserColleges(email)
//     setLoaded(false)
//   };
//   if (!loaded && !Auth.loading) {
//     if (Auth.loaded && Auth.colleges.length > 0) {
//       setLoaded(true)
//       navigation.navigate(screens.auth.confirmClient);
//     } else if (Auth.error) {
//       setLoaded(true)
//       navigation.navigate(screens.auth.emailNotFound);
//     }  
//   }

//   return <Activation onConfirmEmail={handleConfirmEmail} />;
// };

// ActivationContainer.navigationOptions = ({
//   navigation
// }: NavigationScreenConfigProps) => ({
//   // header: (
//   //   <SpeechBubbleTitleBar
//   //     title={localization.getToKnowYou}
//   //     leftIcon="back"
//   //     onLeftIconPress={() => navigation.goBack()}
//   //   />
//   // )
//   header: null
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ActivationContainer);


import React from 'react';
import Activation from './Activation';
import { SpeechBubbleTitleBar } from '../../../components';

import { localization } from '../../../constants';
import { NavigationScreenProps } from 'react-navigation';

const ActivationContainer = (props: NavigationScreenProps) => (
  <Activation {...props} />
);

ActivationContainer.navigationOptions = {
  //header: <SpeechBubbleTitleBar title={localization.hiThere} />
  header: null
};

export default ActivationContainer;
