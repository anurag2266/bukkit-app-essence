import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import { connect } from 'react-redux';
import {
  mapStateToProps,
  mapDispatchToProps
} from '../../../utils';

import EmailNotFound from './EmailNotFound';
import SpeechBubbleTitleBar from '../../../components/SpeechBubbleTitleBar';

import {
  NavigationScreenProps,
  NavigationScreenConfigProps
} from 'react-navigation';
import { localization, screens } from '../../../constants';

interface Props extends NavigationScreenProps {
  getUserColleges: Function;
  Auth: any;
}


const EmailNotFoundContainer = (props: Props) => {
  const [ isLoaded, setLoaded ] = useState(false);
  const [ isError, setError ] = useState(false);
  const { navigation, getUserColleges, Auth } = props;

  const shakeAnimation = new Animated.Value(0);
  const startShake = (shakeAnimation: Animated.Value) => {
    Animated.sequence([
      Animated.timing(shakeAnimation, {toValue: 10, duration: 100, useNativeDriver: true}),
      Animated.timing(shakeAnimation, {toValue: -10, duration: 100, useNativeDriver: true}),
      Animated.timing(shakeAnimation, {toValue: 10, duration: 100, useNativeDriver: true}),
      Animated.timing(shakeAnimation, {toValue: 0, duration: 100, useNativeDriver: true})
    ]).start();
  }

  const handleConfirmEmail = (email: string) => {
    getUserColleges(email)
    setLoaded(false);
    setError(false);
  };
  
    if (!isLoaded && !Auth.loading && Auth.email.length > 0) {
      if (Auth.loaded && Auth.colleges.length > 0) {
        setLoaded(true);
        navigation.navigate(screens.auth.confirmClient);
      } else if (Auth.error || (Auth.loaded && Auth.colleges.length === 0)) {
        setLoaded(true);
        setError(true);
//        navigation.navigate(screens.auth.emailNotFound);
      }
    }
    useEffect(()=> {
      if (isError) {
        startShake(shakeAnimation)
      }
    }, [shakeAnimation])



  return (
    <Animated.View style={{flex: 1, justifyContent: 'space-between', transform: [{translateX: shakeAnimation}]}}>
      <EmailNotFound onSubmit={handleConfirmEmail} isError={isError} {...props} />
   </Animated.View>);
};

EmailNotFoundContainer.navigationOptions = ({
  navigation
}: NavigationScreenConfigProps) => ({
  header: (
    <SpeechBubbleTitleBar
      title={localization.cantFindYou}
      leftIcon="back"
      onLeftIconPress={() => navigation.goBack()}
      rightIcon="questionMark"
      onRightIconPress={() => navigation.setParams({ isHelpVisible: true })}
    />
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(EmailNotFoundContainer);
