import React from 'react';
import { View } from 'react-native';
import ActionButton from '../ActionButton';
import TouchableImage from '../TouchableImage';
import BottomBar from '../BottomBar';

import { images, screens } from '../../constants';
import styles from './styles';
import colors from 'styles/colors';
import { NavigationScreenProps } from 'react-navigation';


type BottomNavBarProps = {
  // actionButton?: React.ReactElement<typeof ActionButton>;
};

// const BottomNavBar = ({ 
//   // actionButton
//  }: BottomNavBarProps) => (

const BottomNavBar = ({ navigation }: NavigationScreenProps) => {

  const handleClickExplore = () => {
    navigation.navigate(screens.staff.da.category)
  };
  const handleClickFav = () => {
    navigation.navigate(screens.staff.da.myFavourites)
  };
  const handleClickAppointment = () => {
    navigation.navigate(screens.staff.da.myAppointment)
  };
  const handleClickSetting = () => {
    navigation.navigate(screens.staff.da.settings)
  };
  return (
    <BottomBar
    // actionButton={actionButton}
    >
      {/* <View style={styles.routeSideContainer}>
      <TouchableImage
        source={images.home}
        style={styles.bottomImage}
        imageStyle={styles.routeImage}
      />
      <TouchableImage source={images.message} imageStyle={styles.routeImage} />
    </View>

    <View style={styles.separator} /> */}

      <View style={styles.routeSideContainer}>

        <TouchableImage
          source={images.bottomTabExplore}
          style={styles.bottomImage}
          imageStyle={styles.routeImage}
          title='Explore'
          textStyle={styles.tabText}
         onPress={() => handleClickExplore()}
        />
        <TouchableImage
          source={images.bottomTabFavourite}
          imageStyle={styles.routeImage}
          title='Favourites'
          textStyle={styles.tabText}
          onPress={() => handleClickFav()}
        />

        <TouchableImage
          source={images.bottomTabAppointment}
          imageStyle={styles.routeImage}
          title='Appointments'
          textStyle={styles.tabText}
          onPress={() => handleClickAppointment()}

        />
        <TouchableImage
          source={images.bottomTabSettings}
          style={styles.bottomImage}
          imageStyle={styles.routeImage}
          title='Settings'
          textStyle={styles.tabText}
          onPress={() => handleClickSetting()}
        />
      </View>
    </BottomBar>
  )
};

export default BottomNavBar;
