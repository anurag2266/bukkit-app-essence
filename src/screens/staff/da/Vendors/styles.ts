import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

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
    height: 45,
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
    flex: 1,
    height:40
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
    textAlignVertical: "center",
    flexDirection: "row",
    alignItems: "center",
    height: 45,
    width: 97,
    position: 'relative',
    right: -1
  },
  buttonText: {
    fontFamily: 'proximaNova-Bold',
    fontSize: 11,
    fontWeight: '600',
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
    display: "flex", 
    flexDirection: 'row', 
    justifyContent: "space-between", 
    alignItems: "center",
    width: "100%"
  },
  listIcon: {
    color: "#AFACAC",
    position: "relative",
    bottom: 4,
    right: 0,
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
    color: colors.yellow,
    letterSpacing: -0.333,
    paddingTop: 2,
    paddingBottom: 2,
  },
  arrowIcon: {
    color: "#AFACAC",
    // height: 20,
    // width: 27,
    textAlign: 'center',
    position: "relative",
    right: 5,
  },
  mapViewImage: {
    width: 15,
    height: 22,
  },
  arrowIcon:{
      //width: 25,
     // height: '25',
  },
  filterIcon:{
    width: 15,
    height:20
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
    width:'100%',
    height:'100%'
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
  ratingIcon:{
    width:55,
    height:9
  },
// MODAL STYLE

centeredView: {
  backgroundColor: "rgba(85, 85, 85, 0.65)",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  height: "100%",
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
},
modalView: {
  minHeight: 467,
  backgroundColor: "white",
  borderRadius: 0,
  padding: 35,
  shadowColor: "#000",
  width: "100%",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 20,
  padding: 10,
  elevation: 2
},
textStyle: {
  fontFamily: 'proximaNova-Bold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 12,
  lineHeight: 15,
  letterSpacing: 0.04,
  textTransform: "uppercase",
  color: colors.white,
},
modalText: {
  marginBottom: 15,
  textAlign: "center"
},
modelListText: {
  fontFamily: 'proximaNova-Bold',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: 12,
  lineHeight: 15,
  letterSpacing: 0.04,
  textTransform: "uppercase",
  color: colors.greyDark,
},
dropdownText: {
  fontFamily: 'proximaNova',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: 15,
  letterSpacing: 0.04,
  color: colors.yellow,
},
clear: {
  fontFamily: 'proximaNova',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: 12,
  letterSpacing: -0.333333,
  color: "#555555",
},
filterListText: {
  fontFamily: 'proximaNova',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: 12,
  lineHeight: 12,
  letterSpacing: -0.333333,
  color: "#2E2959",
},
checkbox: {
  height: 13,
  width: 13,
  borderColor: "#F49B13",
},
categorySelect: {
  fontFamily: 'proximaNova',
  fontSize: 12,
  paddingHorizontal: 10,
  paddingVertical: 14,
  borderWidth: 1,
  borderColor: '#AFACAC',
  borderRadius: 6,
  height: 45,
  fontWeight: "normal",
  fontStyle: "normal",
  color: "#2E2959",
  marginTop: 18,
  marginBottom: 18,
  position: 'relative',
  zIndex: 10
},
catgegorydropdownText: {
  fontFamily: 'proximaNova',
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  color: "#2E2959",
},
selectDropdownText: {
  fontFamily: 'proximaNova',
  fontSize: 12,
  fontWeight: "normal",
  fontStyle: "normal",
  color: "#2E2959",
},
caretDown: {
  position: "absolute",
  right: 12,
  top: 32
}

});

export default styles;
