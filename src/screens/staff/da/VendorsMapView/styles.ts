import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';
import {
  Dimensions
} from 'react-native'
const { height } = Dimensions.get("window");
const MAX_SCOLL_HEIGHT = 190;
const MAX_MAP_HEIGHT= height- MAX_SCOLL_HEIGHT;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '0@s',
    justifyContent: 'space-between'
  },

  introText: {
    marginLeft: '0@s',
    marginRight: '0@s',
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContainer: {
    height: heightPercentage(100),
    // backgroundColor:'grey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  logMeInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: widthPercentage(70),
    position: 'absolute',
    bottom: heightPercentage(6),
    fontSize: 12
  },
  backgroundImage: {
    width: widthPercentage(100),
    height: heightPercentage(100),
    paddingHorizontal: '0@s',
    paddingBottom: '0@s'
  },
  logoImage: {
    height: heightPercentage(15),
    aspectRatio: 1,
    marginTop: '20%',
    marginBottom: '20@s',
  },
  catImageSectionStyle: {
    height: heightPercentage(20),
    borderRadius: 6,

  },
  catImageStyle: {
    // width: widthPercentage(100),
    height: heightPercentage(20),
    borderRadius: 6
  },
  LocationSection: {
    borderWidth: 1,
    borderRadius: 6,
    height: 40,
    borderColor: "#AFACAC",
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingLeft: 4
  },
  locationInput: {
    fontFamily: 'proximaNova',
    paddingLeft: 10,
    fontSize: 10,
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 10,
    letterSpacing: 0.04,
    textTransform: "uppercase",
    flex: 1,
  },
  locationIcon: {
    height: 18.5,
    width: 18.5,
  },
  locationButton: {
    backgroundColor: '#F49B13',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 40,
    width: 97,
    position: 'relative',
    right: -1
  },
  buttonText: {
    fontFamily: 'proximaNova-Bold',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 11,
    fontStyle: "normal",
    color: "#ffffff",
    letterSpacing: 0.04,
  },
  buttonIcon: {
    color: "#ffffff",
    marginLeft: 4
  },
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
  categoryListActive: {
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 26,
    paddingBottom: 5,
    color: '#2e2959',
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    lineHeight: 12,
    letterSpacing: -0.333333,
    position: "relative",
    bottom: 2
  },
  listView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center"
  },
  listIcon: {
    // fontSize: 16,
    color: "#AFACAC",
    position: "relative",
    bottom: 4,
    //right:-10,
    zIndex: 100
  },

  resultTextView: {
    marginTop: 6,
    marginBottom: 6
  },
  resultsTxet: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 12,
    color: "#F49B13",
    letterSpacing: -0.333,
    paddingTop: 2,
    paddingBottom: 2,
  },
  // arrowIcon: {
  //   color: "#AFACAC",
  //   height: 30,
  //   width: 25,
  //   textAlign: 'center',
  //   position: "relative",
  //   right: 5,
  // },
  mapViewImage: {
    width: 15,
    height: 22,
  },
  arrowIcon: {
    //width: 25,
    height: 25,
  },
  mapViewTxet: {
    fontSize: 8,
    lineHeight: 8,
    color: "#F49B13",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    marginTop: 5
  },
  filterIcon: {
    marginLeft: 37,
    marginRight: 15,
    width: 27,
    height: 13,
    textAlign: 'center',
  },
  filterText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#2E2959",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: -0.3333,
    marginTop: 4,
  },
  filterTextBold: {
    fontSize: 10,
    lineHeight: 12,
    color: "#2E2959",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Bold',
    letterSpacing: -0.3333,
    marginTop: 4,
  },

  // VEMDORS LIST
  profileImage: {
    textAlign: 'center',
    width: '100%',
    height: '100%'
  },
  reviewText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 8,
    lineHeight: 10,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.white,
  },
  ratingIcon: {
    width: 55,
    height: 9
  },
  mapContainer: {
    width: widthPercentage(100),
    height:MAX_MAP_HEIGHT,
    marginTop: 0
  },
  mapStyle:{
     height: MAX_MAP_HEIGHT,
      width: "100%" 
  },
  vendorListScroll: {
    width: widthPercentage(100),
    height: MAX_SCOLL_HEIGHT,
    marginTop: 0
  },
  vendorCard:{
    marginTop: 20,
    marginBottom:20,
    marginLeft: 12,
    marginRight:12,
    width: widthPercentage(85),
    flex: 1, 
    flexDirection: 'column',
    borderWidth: 0.5, 
    borderRadius: 6, 
    borderColor: colors.greyLight
  }
});

export default styles;
