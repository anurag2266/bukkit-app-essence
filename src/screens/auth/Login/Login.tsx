import React, {useState} from 'react';
import { View,TouchableOpacity } from 'react-native';
import { Text, Link, Button, TextInput, Container } from '../../../components';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, Image } from "react-native";
import mainStyles from '../../../styles/mainStyle';
import styles from './styles';
import { localization, screens, images } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import IncorrectPinAlert from './components/IncorrectPinAlert';



// type LoginProps = NavigationScreenProps & {
//   onFulfillPasscode?: (passcode: string) => void;
//   onRetry?: () => void;
//   isIncorrectPinAlertVisible?: boolean;
// };

// const Login = ({
//   navigation,
//   onFulfillPasscode,
//   onRetry,
//   isIncorrectPinAlertVisible = false
// }: LoginProps) => (

  const Login = ({ navigation }: NavigationScreenProps) => {

    const [hidePass, setHidePass] = useState(true);
     
    const onLogMeIn = () => navigation.navigate(screens.staff.da.cart);


  return (
    // <Container
    //   style={{ backgroundColor: 'white' }}
    //   contentContainerStyle={{ height: 50, }}
    //   title={localization.signin}
    //   titleContainerStyle={{ backgroundColor: 'white' }}
    //   headerLeft={{
    //     icon: 'back',
    //     onPress: () => navigation.goBack()
    //     //onPress: onBack
    //   }}
    // >

    <Container
      contentContainerStyle={styles.container}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20}}
      title={localization.signin}
      headerLeft={{
        icon: 'backSignin',
        onPress: () => navigation.goBack(),
        iconColor: '#F49B13'
      }}
      navigation={navigation}
    >
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={[mainStyles.paddingLR20, { position: "relative" }]}>
        <View style={[mainStyles.marginTB20, { paddingLeft: 3, paddingRight: 3 }]}>
          <View style={[styles.loginSection]}>
            <View style={[styles.logOptionsIcons]}>
              <MaterialCommunityIcons
                name='email-outline'
                color="#AFACAC"
                size={18}
              />
              <SimpleLineIcons style={{ marginLeft: 9 }}
                name='phone'
                color="#AFACAC"
                size={16}
              />
            </View>
            <TextInput
              style={[styles.emailInput]}
              containerStyle={{width:'100%'}}
              label={localization.emailPhone}
              underlineColorAndroid="transparent"
              placeholderTextColor="#AFACAC"
              autoCapitalize="none"
            />
          </View>
          <View style={[styles.passwordContainer]}>
            <View style={[styles.passwordSection]}>
              <Image style={[styles.password]} source={images.password} />
            </View>
            <TextInput
              secureTextEntry={hidePass ? true : false}
              style={[styles.passwordInput]}
              containerStyle={{width:'100%'}}
              label={localization.password}
              underlineColorAndroid="transparent"
              placeholderTextColor="#AFACAC"
              autoCapitalize="none"
            />
            <View style={[styles.showPassword]}>
              <Ionicons style={[styles.showPasswordIcon]}
                name={hidePass ? 'ios-eye-off' : 'ios-eye'}
                color="#F49B13"
                size={18}
                onPress={() => setHidePass(!hidePass)}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.forgotPass]}>{localization.forgotPassword}</Text>
      </View>
      <TouchableOpacity style={[styles.continue]}
      onPress={onLogMeIn}
      >
        <Text style={[styles.continueText]}>{localization.signin}</Text>
      </TouchableOpacity>
      <View style={{display: "flex", alignItems: "center", justifyContent: "center", marginTop: 8, position: "absolute", bottom: 0, width: "80%", marginLeft: "10%" }}>
        <Text style={[styles.termsCondition]}>{localization.termsCondition}</Text>
        <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Text style={[styles.privacy]}>{localization.termsConditionText}</Text>
          <Text style={{fontSize: 11, color: "#000000",fontFamily: 'proximaNova', lineHeight: 11, marginLeft: 2, marginRight: 2}}>{localization.and}</Text>
          <Text style={[styles.privacy]}>{localization.privacyText}</Text>
        </View>
      </View>
    </Container>
  );
};

export default Login;

