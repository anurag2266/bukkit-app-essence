import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { StatusBar, Image } from "react-native";
import { TextInput, Text, Button, Container } from '../../../components';
import styles from './styles';
import { localization, screens, images } from '../../../constants';
import mainStyles from '../../../styles/mainStyle';
import { TextVariant } from '../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginOptions = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.auth.login);


  return (
    // <Container
    //   style={{ backgroundColor: 'transparent' }}
    //   contentContainerStyle={{ height: 50, }}
    //   title={localization.signin}
    //   titleContainerStyle={{ backgroundColor: 'white', }}
    //   headerLeft={{
    //     icon: 'back',
    //     onPress: () => navigation.goBack()
    //   }}
    // >
    <Container
      contentContainerStyle={styles.container}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20}}
      title={localization.signin}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
      navigation={navigation}
    >


      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <View style={[mainStyles.paddingLR20, { position: "relative" }]}>
        <View style={[styles.loginOptionSection]}>
          <Text style={[styles.firstTime]}>{localization.loginText}</Text>
          <View style={[styles.loginOptionButtons]}>
            <TouchableOpacity style={[styles.emailPhoneButton]}
              onPress={onLogMeIn}
            >
              <Text style={[styles.eamilIcon]}>{localization.emailPhone}</Text>
            </TouchableOpacity>
            <View style={[styles.facebookButton]}>
              <FontAwesome style={[styles.facebookIcon]}
                name='facebook-square'
                color="#ffffff"
                size={20}
              />
              <Text style={[styles.facebook]}>{localization.facebook}</Text>
            </View>
            <View style={[styles.googleButton]}>
              <Image
                style={styles.googleIocn}
                source={images.google}
              />
              <Text style={[styles.google]}>{localization.google}</Text>
            </View>
          </View>
        </View>
        <View style={[mainStyles.marginTB20, { paddingLeft: 3, paddingRight: 3 }]}>
          <Text style={[styles.firstTime]}>{localization.firstTime}</Text>
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
              label="Email / Mobile"
              underlineColorAndroid="transparent"
              placeholderTextColor="#AFACAC"
              autoCapitalize="none"
            />
            <View style={[styles.cancel]}>
              <Image source={images.cancel} />
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={[styles.continue]}
        onPress={onActivateAccount}
      >
        <Text style={[styles.continueText]}>{localization.continue}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default LoginOptions;
