import React from 'react';
import { View, Image } from 'react-native';
import Text, { TextVariant } from '../Text';

import { images, localization } from '../../constants';
import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '171@s',
    backgroundColor: colors.blueLight,
    alignItems: 'center'
  },

  logoContainer: {
    marginBottom: '12@s',
    width: '151@s',
    height: undefined,
    aspectRatio: 1.12
  },

  logo: {
    flex: 1,
    width: undefined,
    height: undefined
  },

  underline: {
    marginTop: '-7@s',
    marginLeft: '3@s'
  }
});

const LaunchImage = () => (
  <View style={styles.container}>
    <View>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={images.logo} resizeMode="contain" />
      </View>

      <Text
        variant={TextVariant.TitleMainWhite}
        showUnderline
        underlineStyle={styles.underline}
      >
        {localization.edular}
      </Text>
    </View>
  </View>
);

export default LaunchImage;
