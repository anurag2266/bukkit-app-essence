import React from 'react';
import { View, ImageBackground } from 'react-native';
import ActionButton from '../ActionButton';

import { images } from '../../constants';

import { ScaledSheet } from '../../utils';
import { widthPercentage, heightPercentage } from '../../utils/scaleUtil';

const styles = ScaledSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    justifyContent: 'flex-end',
    width: widthPercentage(100),
    height: undefined,
    aspectRatio: 4.74
  },

  backgroundImage: {
    flexDirection: 'row',
    width: widthPercentage(100),
    height: 50,
    // aspectRatio: 5.68,
    paddingHorizontal: '28@s',
   paddingBottom: '2@s',
    backgroundColor:'#fff'
  }
});

type BottomBarProps = {
  children?: React.ReactNode;
  actionButton?: React.ReactElement<typeof ActionButton>;
};

const BottomBar = ({ children, actionButton }: BottomBarProps) => (
  <>
    {actionButton}

    <View style={styles.container}>
      <View
        //source={images.bottomNavBar}
        style={styles.backgroundImage}
        //resizeMode="stretch"
      >
        {children}
      </View>
    </View>
  </>
);

export default BottomBar;
