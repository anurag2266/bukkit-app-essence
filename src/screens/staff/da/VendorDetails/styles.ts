import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

import {
  Dimensions,
  StyleSheet
} from 'react-native'


const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(7)) / 2;

const MIN_HEADER_HEIGHT = 50;
const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

 const BUTTON_HEIGHT = 48;
 const BUTTON_WIDTH = 200;

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
      //backgroundColor:'green',
      position: "absolute",
      left: 0,
      top: 15,
      right: 0,
      
      //alignItems: "center",
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
      zIndex:10,
    },
    tracks: {
      marginTop: 32,
      backgroundColor: "white",
      minHeight:  heightPercentage(100)-(MIN_HEADER_HEIGHT+14),
  //     borderTopWidth:0.5,
  // borderTopColor:'#c4c4c4'
  
    },
    coverContainer: {
      ...StyleSheet.absoluteFillObject,
      //height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
      // height: 290,
      height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
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
      bottom:30,
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
      height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
     // backgroundColor: 'green'
    },
    customImage: {
      width: "100%",
      height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
      resizeMode: "cover"
    },
  
    //added 3rd aug
    tab: {
      paddingTop: 8,
      paddingBottom: 8,
      paddingLeft: 15,
      paddingRight: 15,
      marginTop: 5,
      marginBottom: 5,
  
    },
  
    // added
  
    headerImg: {
      marginLeft:8,
      marginTop:2,
    },
    infoText: {
      fontFamily: 'proximaNova',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 10.5,
      lineHeight: 14,
      display: 'flex',
      alignItems: 'center',
      letterSpacing: 0.04,
      color: colors.greyDark
    },
    wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  slider1:{
    height:100,
    width:widthPercentage(100),
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
  });

export default styles;
