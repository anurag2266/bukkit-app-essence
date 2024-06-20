import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, TouchableHighlight, Text, StatusBar, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { onScrollEvent } from "react-native-redash";

import {
  Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT, HEADER_DELTA
} from './components/Model';
import { BUTTON_HEIGHT } from "./components/ShufflePlay";
import Header from "./components/Header";

import { TabGroup, Container } from '../../../../components';
import VendorService from '../../common/VendorService';
import VendorAbout from '../../common/VendorAbout';
import VendorReview from '../../common/VendorReview';

import ImageSlider from 'react-native-image-slider';
import { images, screens } from '../../../../constants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import colors from "styles/colors";
import { heightPercentage } from '../../../../utils/scaleUtil';
import { NavigationScreenProps } from 'react-navigation';
import Swiper from 'react-native-swiper'
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const sliderImg = [
  images.slider1,
  images.slider1,
  images.slider1
];

const {
  interpolate, Extrapolate, Value
} = Animated;

interface AlbumProps {
  album: Album;
  y: Animated.Value<number>;

}



// export default ({ album: { artist, tracks, cover } }: AlbumProps) => {

const VendorDetails = ({ navigation }: NavigationScreenProps) => {
  const y = new Value(0);
  const [favactive, setfavactive] = useState(true);


  const height = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
    outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
    extrapolate: Extrapolate.CLAMP,
  });
  const contentOpacity = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
    outputRange: [0, 1, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  // COVER

  const scale: any = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const opacity = interpolate(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const handleClick = () => {
    navigation.navigate(screens.staff.da.bookAppointment)
  };
  const handleBookingTerm = () => {
    navigation.navigate(screens.staff.da.bookingTerms)
  };
  const handleMapView = () => {
    navigation.navigate(screens.staff.da.vendorAboutFullMap)
  };

  const handleBackAction = () => {
    console.log('back clicked== ');
    navigation.goBack()
  };
  const tabs = [
    {
      title: 'SERVICES',
      content: <VendorService
        onPress={() => handleClick()}
      />
    },
    {
      title: 'ABOUT',
      content: <VendorAbout
        onPress={() => handleBookingTerm()}
        onPressMap={() => handleMapView()}
      />
    },
    {
      title: 'REVIEWS',
      content: <VendorReview />
    }
  ];

  return (
    <>
      {/* <Container
       style={{ backgroundColor: 'transparent', paddingBottom: 0 }}
       contentContainerStyle={{ height: 50 }}
       title=''
       titleContainerStyle={{ backgroundColor: 'transparent', position: 'absolute', top: 18, left: 0, right: 0, width: '100%', zIndex: 10 }}
       headerLeft={{
         icon: 'back',
         onPress: () => navigation.goBack()
       }}
       navigation={navigation}
     > */}
      <View style={styles.container}>
        {/* <Cover {...{ y, album }} /> */}
        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

        <Animated.View style={[styles.coverContainer, { transform: [{ scale }] }]}>
          {/* <Image style={styles.coverImage} source={cover} /> */}
          {/* SHARE SECTION */}

          {/* <View style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 1,
            backgroundColor: colors.blackOpacity,
            height: 30,
            width: 70,
            position: 'absolute',
            top: 38,
            right: 0,
            zIndex: 10,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center'
          }}>
            <View style={{ marginRight: 5 }}>
              {favactive == true ? (
                <EntypoIcon
                  name='heart'
                  color={colors.yellow}
                  size={25}
                  onPress={() => setfavactive(false)}
                />
              ) : (
                  <EntypoIcon
                    name='heart-outlined'
                    color={colors.white}
                    size={25}
                    onPress={() => setfavactive(true)}
                  />
                )}
            </View>
            <View>
              <EntypoIcon
                name='share'
                color={colors.white}
                size={22}
              />
            </View>
          </View> */}
          {/* SHARE SECTION */}
          <ImageSlider
            loop
            autoPlayWithInterval={3000}
            images={sliderImg}
            //onPress={({ index }) => alert(index)}
            customSlide={({ index, item, style, width }) => (
              // It's important to put style here because it's got offset inside
              <View
                key={index}
                style={[
                  style,
                  styles.customSlide,
                ]}
              >
                <Image source={item} style={styles.customImage} />
              </View>
            )}
            customButtons={(position: any, move: any) => (
              <View style={styles.buttons}>
                {sliderImg.map((image, index) => {
                  return (
                    <TouchableHighlight
                      key={index}
                      onPress={() => move(index)}
                      style={styles.button}
                    >
                      <View>
                        <EntypoIcon style={position === index && styles.buttonSelected}
                          name='circle'
                          size={7}
                        />
                      </View>
                    </TouchableHighlight>
                  );
                })}
              </View>
            )}
          />
          {/* Header with slider */}
          <View
            style={{
              flex: 1,
              position: 'absolute',
              backgroundColor: colors.white,
              bottom: -55,
              left: 0,
              right: 0,
              width: '100%',
              zIndex: 9,
              flexDirection: 'row',
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 10,
              justifyContent: 'space-between',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                borderBottomWidth: 0.5,
                borderBottomColor: "#AFACAC",
                display: "flex",
                flexDirection: "row",
                justifyContent: 'space-between',
                alignContent: 'center',
                alignItems: 'center',
                width: "100%"
              }}>
              <View>
                <Text style={{
                  fontFamily: 'proximaNova-Bold',
                  fontStyle: 'normal',
                  fontWeight: '600',
                  fontSize: 16,
                  lineHeight: 19,
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: 0.04,
                  textTransform: 'capitalize',
                  color: colors.greyDark,
                  marginBottom: 3
                }}>Extreme Barbers</Text>
                <Image
                  style={{
                    marginTop: 4,
                    marginBottom: 6,
                    width: 100,
                    height: 17,
                  }}
                  source={images.reviewsRating}
                  resizeMode='stretch'
                />
                <Text style={styles.infoText}>55 Review</Text>
              </View>
              <View style={{ flexDirection: 'row', position: 'relative', bottom: 8 }}>
                <View>
                  <Text style={[styles.infoText, { textAlign: 'right' }]}>12 Condell Street,</Text>
                  <Text style={[styles.infoText, { textAlign: 'right' }]}>Wembley,</Text>
                  <Text style={[styles.infoText, { textAlign: 'right' }]}>HA6 2LA, London</Text>
                </View>

                <MaterialCommunityIcons
                  style={styles.headerImg}
                  size={32}
                  color={colors.greyDark}
                  name='directions'
                />
              </View>
            </View>
          </View>

          <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "white", opacity }}
          />
        </Animated.View>

        <Animated.ScrollView
          onScroll={onScrollEvent({ y })}
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={1}
          stickyHeaderIndices={[1]}
        >
          <View style={[styles.cover]}>
            <Animated.View
              style={[styles.gradient]}
            >
              {/* ICON ACTIONS */}
              <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                //alignContent: 'center',
                alignItems: 'center',
                paddingLeft:20

              }}>
                {/* BACK ICON */}
                <TouchableOpacity style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  //alignContent: 'center',
                  alignItems: 'center'
                }}
                  onPress={() => console.log("I am clicked")}
                >
                  <Ionicons
                    name='arrow-back'
                    color={colors.white}
                    size={25}
                  />
                </TouchableOpacity>
                {/* BACK ICON */}
                <View style={{
                  display: 'flex',
                  flexDirection: 'row',
                  //flex: 1,
                  backgroundColor: colors.blackOpacity,
                  height: 30,
                  width: 70,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                  <View style={{ marginRight: 5 }}>
                    {/* {favactive == true ? ( */}
                      <EntypoIcon
                        name='heart'
                        color={colors.yellow}
                        size={25}
                        //onPress={() => setfavactive(false)}
                      />
                    {/* ) : (
                        <EntypoIcon
                          name='heart-outlined'
                          color={colors.white}
                          size={25}
                          onPress={() => setfavactive(true)}
                        />
                      )} */}
                  </View>
                  <View>
                    <EntypoIcon
                      name='share'
                      color={colors.white}
                      size={22}
                    />
                  </View>
                </View>
              </View>
              {/* ICON ACTIONS */}
            </Animated.View>
          </View>
          <View style={styles.header}>
            <Header {...{ y }}  onBackPress={() => handleBackAction()} />
            {/* <ShufflePlay /> */}
          </View>
          <View style={styles.tracks}>
            <TabGroup
              tabs={tabs}
              tabStyle={styles.tab}
            />
          </View>
        </Animated.ScrollView>
      </View>
      {/* </Container> */}
    </>
  );
};

export default VendorDetails;




