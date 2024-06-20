import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Text, TextInput, Container } from '../../../components';
import { StatusBar, Image } from "react-native";
import mainStyles from '../../../styles/mainStyle';
import styles from './styles';
import { localization, screens, images } from '../../../constants';
import { TextVariant } from '../../../components/Text';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationScreenProps } from 'react-navigation';


// type ActivationProps = NavigationScreenProps & {

//   onConfirmEmail?: (email: string) => void;
// };

// const Activation = ({
//   navigation,
//   onConfirmEmail = () => null
// }: ActivationProps) => {
//   const [email, setEmail] = useState('');

const Activation = ({ navigation }: NavigationScreenProps) => {

  const onLogMeIn = () => navigation.navigate(screens.auth.loginEnterCode);


  return (
    // <Container
    //   style={{ backgroundColor: 'white' }}
    //   contentContainerStyle={{ height: 50, }}
    //   title={localization.register}
    //   titleContainerStyle={{ backgroundColor: 'white' }}
    //   headerLeft={{
    //     icon: 'back',
    //     //onPress: onBack
    //   }}
    // >


    <Container
      contentContainerStyle={styles.container}
      titleContainerStyle={{ height: 50, backgroundColor: 'transparent', alignItems: 'center', marginTop: 20 }}
      title={localization.register}
      headerLeft={{
        icon: 'back',
        onPress: () => navigation.goBack()
      }}
    >
      <StatusBar translucent backgroundColor="white" barStyle="dark-content" />
      <ScrollView>
        <View style={[mainStyles.paddingLR20, { position: "relative" }]}>
          <View style={[mainStyles.marginTB20, { paddingLeft: 3, paddingRight: 3, height: "85%" }]}>
            <Text style={[styles.singupText]}>{localization.signupup}</Text>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <MaterialCommunityIcons
                  name='email-outline'
                  color="#AFACAC"
                  size={18}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={{ width: '100%' }}
                label={localization.email}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              <View style={[styles.cancel]}>
                <Image source={images.cancel} />
              </View>
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <Image source={images.user} />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={{ width: '100%' }}
                label={localization.firstName}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              <View style={[styles.cancel]}>
                <Image source={images.cancel} />
              </View>
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <Image source={images.user} />
              </View>
              <TextInput
                style={[styles.emailInput]}
                containerStyle={{ width: '100%' }}
                label={localization.lastName}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              <View style={[styles.cancel]}>
                <Image source={images.cancel} />
              </View>
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <SimpleLineIcons
                  name='phone'
                  color="#AFACAC"
                  size={16}
                />
              </View>
              <TextInput
                style={[styles.emailInput]}
                label={localization.mobileNum}
                containerStyle={{ width: '100%' }}
                underlineColorAndroid="transparent"
                placeholderTextColor="#AFACAC"
                autoCapitalize="none"
              />
              <View style={[styles.cancel]}>
                <Image source={images.cancel} />
              </View>
            </View>
            <View style={[styles.loginSection]}>
              <View style={[styles.logOptionsIcons]}>
                <Image source={images.password} />
              </View>
              <TextInput
                secureTextEntry={true}
                style={[styles.emailInput]}
                containerStyle={{ width: '100%' }}
                label={localization.password}
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
      </ScrollView>
      <View style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 8, width: "100%" }}>
        <Text style={[styles.termsCondition]}>{localization.signupText}</Text>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
          <Text style={[styles.privacy]}>{localization.termsConditionText}</Text>
          <Text style={{ fontSize: 11, color: "#000000", fontFamily: 'proximaNova', lineHeight: 11, marginLeft: 2, marginRight: 2 }}>{localization.and}</Text>
          <Text style={[styles.privacy]}>{localization.privacyText}</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.continue]}
        onPress={onLogMeIn}
      >
        <Text style={[styles.continueText]}>{localization.createAcc}</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Activation;
