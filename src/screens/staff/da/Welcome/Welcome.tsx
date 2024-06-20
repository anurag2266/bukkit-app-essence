import React from 'react';
import { View, ImageBackground, Image, StatusBar } from 'react-native';
import { Text, Button } from '../../../../components';
import styles from './styles';
import { localization, screens, images } from '../../../../constants';
import { TextVariant } from '../../../../components/Text';
import { NavigationScreenProps } from 'react-navigation';
import colors from '../../../../styles/colors';


const Welcome = ({ navigation }: NavigationScreenProps) => {
  const onActivateAccount = () => navigation.navigate(screens.auth.activation);
  const onLogMeIn = () => navigation.navigate(screens.staff.da.category);


  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.welcomeBG}
        style={styles.backgroundImage}
        resizeMode="stretch"
      >
          <StatusBar translucent backgroundColor="transparent" />

        <View style={{justifyContent:'center', alignItems:'center'}}>
          <Image
            style={styles.logoImage}
            source={images.logoWithText}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text style={styles.introText} variant={TextVariant.Heading2GreyRegular}>
            {localization.introMessage}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title={localization.getStart}
            style={styles.logMeInButton}
            titleStyle={{color:colors.white, fontSize:14, fontFamily:'proximaNova-Semibold'}}
            type="yellow"
            onPress={onLogMeIn}
          />
        </View>
      </ImageBackground>

    </View>
  );
};

export default Welcome;
