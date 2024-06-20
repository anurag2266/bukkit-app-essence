import * as React from "react";
import { View, StyleSheet, Image, TouchableHighlight, Text } from "react-native";
import Animated from "react-native-reanimated";
import Cover from "./Cover";
import { onScrollEvent } from "react-native-redash";

import {
  Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT, HEADER_DELTA
} from "./Model";
import Track from "./Track";
import ShufflePlay, { BUTTON_HEIGHT } from "./ShufflePlay";
import Header from "./Header";

import { TabGroup } from '../../../../../components';
import VendorService from '../../../common/VendorService';
import VendorAbout from '../../../common/VendorAbout';
import VendorReview from '../../../common/VendorReview';

import ImageSlider from 'react-native-image-slider';
import { images } from '../../../../../constants';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import colors from "styles/colors";
import { widthPercentage, heightPercentage } from '../../../../../utils/scaleUtil';


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



export default ({ album: { artist, tracks, cover } }: AlbumProps) => {
  const y = new Value(0);


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
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const tabs = [
    {
      title: 'SERVICES',
      content: <VendorService />
    },
    {
      title: 'ABOUT',
      content: <VendorAbout />
    },
    {
      title: 'REVIEWS',
      content: <VendorReview />
    }
  ];

  return (
    <View style={styles.container}>
      {/* <Cover {...{ y, album }} /> */}


      <Animated.View style={[styles.coverContainer, { transform: [{ scale }] }]}>
        {/* <Image style={styles.coverImage} source={cover} /> */}

        {/* SLIDER */}

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
          <View style={{ flex: 1, position:'absolute', backgroundColor:colors.white, bottom:-20,left:0, right:0, width:'100%', zIndex:9 , flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop:20, justifyContent:'space-between', alignContent:'center', alignItems:'center', borderBottomColor: "#C4C4C4", borderBottomWidth: 0.5 }}>
            <View>
              <Text style={{
                fontFamily: 'proximaNova-Bold',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: 15,
                lineHeight: 18,
                display: 'flex',
                alignItems: 'center',
                letterSpacing: 0.04,
                textTransform: 'capitalize',
                color: colors.greyDark
              }}>Extreme Barbers</Text>
              <Image
                style={styles.customerReviews}
                source={images.reviewsRating}
                resizeMode='stretch'
              />
              <Text style={styles.infoText}>55 Review</Text>
            </View>
            <View style={{flexDirection: 'row' }}>
              <View>
                <Text style={[styles.infoText,{textAlign:'right'}]}>12 Condell Street,</Text>
                <Text style={[styles.infoText,{textAlign:'right'}]}>Wembley,</Text>
                <Text style={[styles.infoText,{textAlign:'right'}]}>HA6 2LA,London</Text>
              </View>
              <Image
                style={styles.headerImg}
                source={images.detailHeaderImg}
                resizeMode='cover'
              />
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
        <View style={styles.cover}>
          <Animated.View
            style={[styles.gradient, { height }]}
          >
          </Animated.View>
        </View>
        <View style={styles.header}>
          <Header {...{ y }} />
          {/* <ShufflePlay /> */}
        </View>
        <View style={styles.tracks}>
          {/* <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ width: '50%' }}>
              <Text>Extreme Barbers</Text>
              <Image
                style={styles.customerReviews}
                source={images.reviewsRating}
                resizeMode='stretch'
              />
              <Text>55 Review</Text>
            </View>
            <View style={{ width: '50%', flexDirection: 'row' }}>
              <View>
                <Text>12 Condell Street,</Text>
                <Text>Wembley,</Text>
                <Text>HA6 2LA,London,</Text>
              </View>
              <Image
                style={styles.customerReviews}
                source={images.reviewsRating}
                resizeMode='stretch'
              />
            </View>
          </View> */}
          <TabGroup
            tabs={tabs}
            tabStyle={styles.tab}
          // defaultCurrentTabIndex={selectedInfo}
          />
        </View>
      </Animated.ScrollView>




    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  //   CONTENT STYLE
  contentContainer: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  artistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  artist: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  header: {
    //marginTop: -0,
  },
  tracks: {
    marginTop: 32,
    backgroundColor: "white",
    minHeight:  heightPercentage(100)-(MIN_HEADER_HEIGHT+12),
    borderTopWidth:0.5,
borderTopColor:'#c4c4c4'

  },
  coverContainer: {
    ...StyleSheet.absoluteFillObject,
    //height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
    height: 290,
    //backgroundColor: 'blue'
  },
  coverImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },


  // OLD STYLE

  // container: {
  //     flex: 1,
  //     padding: '0@s',
  //     paddingTop: '0@s',
  //     justifyContent: 'space-between'
  //   },    

  categoryList: {
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 26,
    paddingBottom: 5,
    color: '#2e2959',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'proximaNova-Semibold',
    fontStyle: 'normal',
    lineHeight: 10,
    letterSpacing: -0.333333
  },






  // Slider css 
  slider: {
    height: "100%",
    width: "100%",
  },
  contentText: {
    color: '#fff'
  },
  buttons: {
    zIndex: 1,
    height: 10,
    marginTop: 0,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    position:'absolute',
    bottom:50,
    left:0,
    right:0,
    // backgroundColor: 'red'
  },
  button: {
    margin: 3,
    width: 7,
    height: 7,
    opacity: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#AFACAC",
    color: "#AFACAC",
    borderRadius: 10,
    borderColor: "#AFACAC",
  },
  buttonSelected: {
    opacity: 1,
    color: '#ffffff',
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderColor: "#ffffff",
  },
  customSlide: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
   // backgroundColor: 'green'
  },
  customImage: {
    width: "100%",
    height: 250,
  },

  //added 3rd aug
  tab: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: 5,
    marginBottom: 5,

  },

  // added

  customerReviews: {
    width: 82,
    height: 14,
  },
  headerImg: {
    width: 28,
    height: 27,
    marginLeft:8,
    marginTop:2,
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
    textTransform: 'capitalize',
    color: colors.greyDark
  }
});
