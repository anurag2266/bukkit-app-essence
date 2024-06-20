import * as React from "react";
import { View, StyleSheet, Image, TouchableHighlight, Text } from "react-native";
import Animated from "react-native-reanimated";
import { MIN_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import { BUTTON_HEIGHT } from "./ShufflePlay";
import colors from "styles/colors";
import { images } from '../../../../../constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


interface HeaderProps {
  y: Animated.Value<number>;
  onBackPress?: () => void;
}

const { interpolate, Extrapolate } = Animated;

export default ({ y,onBackPress }: HeaderProps) => {
  const opacity = interpolate(y, {
    inputRange: [HEADER_DELTA - 60, HEADER_DELTA],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const textOpacity = interpolate(y, {
    inputRange: [HEADER_DELTA - 8, HEADER_DELTA - 4],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.container, { opacity }]}>
      {/* <Animated.Text style={[styles.title, { opacity: textOpacity }]}>TEST</Animated.Text> */}
      {/* Header with slider */}
      <View style={{ flex: 1, flexDirection: 'row',borderBottomColor:'#c4c4c4', borderBottomWidth:0.5, backgroundColor:'white', paddingLeft: 30, justifyContent: 'space-between', alignContent: 'space-between', alignItems:'center', paddingTop:18 }}>
        <View style={{flex: 6, justifyContent: "flex-start", marginLeft: 15,}}>
          <Text style={{
            opacity:1,
            fontFamily: 'proximaNova-Bold',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: 16,
            lineHeight: 18,
            display: 'flex',
            alignItems: 'center',
            letterSpacing: 0.04,
            textTransform: 'capitalize',
            color: colors.greyDark,
          }}>
            Extreme Barbers
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <Text style={[styles.infoText, { textAlign: 'left' }]}>12 Condell Street, Wembley,</Text>
              <Text style={[styles.infoText, { textAlign: 'left' }]}>HA6 2LA, London</Text>
            </View>
            {/* <Image
              style={styles.headerImg}
              source={images.detailHeaderImg}
              resizeMode='cover'
            /> */}
             <MaterialCommunityIcons
                style={styles.headerImg}
                  size={30}
                  color={colors.greyDark}
                  name='directions'
                />
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", position: "relative", bottom: 0}}>
          <Image
            style={styles.headerAboutImage}
            source={images.vendorProfilePic1}
            resizeMode='cover'
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: BUTTON_HEIGHT / 3 - MIN_HEADER_HEIGHT,
    left: 0,
    right: 0,
    height: MIN_HEADER_HEIGHT,
    backgroundColor: "white",
    paddingTop: 15,
  },
  title: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "400",
  },
  customerReviews: {
    width: 82,
    height: 14,
  },
  headerImg: {
    marginLeft: 12,
    position: "relative",
    bottom: 10
  },
  infoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10.5,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    color: colors.greyDark
  },
  headerAboutImage: {
    width: 50,
    height: 50
  }
});