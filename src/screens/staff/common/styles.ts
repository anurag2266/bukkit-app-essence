import { ScaledSheet } from '../../../utils';
import colors from 'styles/colors';
import { heightPercentage, widthPercentage } from 'utils/scaleUtil';
import { ScrollViewComponent } from 'react-native';

const styles = ScaledSheet.create({
  sectionBox: {
    // flex: 1,
    margin: '1@s',
    width: '16%',
    justifyContent: 'center',
    alignContent: 'stretch',
    alignItems: 'center',
    textAlign: 'center',
    height: 60,
  },
  logoImage: {
    width: 60,
    height: 60,
    padding: 10,
  },
  minImage: {
    width: 20,
    height: 20,
    marginBottom: 5
  },
  calendar:
  {
    height: 250,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  input: {
    marginTop: '19@s'
  },
  inputStyle: {
    width: 80
  },

  // UPDATED

  scroll: {
    backgroundColor: 'white',
    //height:heightPercentage(90)
  },
  userRow: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    height: 160
  },
  userImage: {
    marginRight: 0,
  },
  listItemContainer: {
    height: 55,
    borderWidth: 0.5,
    borderColor: '#ECECEC',
  },

  // SECTION HEAD

  sectionContainer: {
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: '#F4F5F4',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    height: 34,
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 18,
    width: 34,
  },
  actionContainer: {
    flex: 1,
    width: '100%',
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    marginLeft: 0,
    color: '#2F3584',
    fontWeight: '900',
  },
  infoText: {
    fontSize: 18,
    marginRight: 20,
    color: colors.greyDark,
    fontWeight: '500',
    width: "100%"
  },
  ButtonContainer: {
    flex: 1,
    width: '100%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ButtonStyle: {
    width: '90%',
    fontSize: 20,
    padding: 0,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //changes
  hostpotImage: {
    width: '10@s',
    height: undefined,
    aspectRatio: 1.07,
    tintColor: colors.greyMedium
  },
  proPic: {
    width: '100%',
    height: '100%'
  },
  // listItemStyle:{
  //   fontSize:14,
  //   paddingTop:10,
  //   margin:0,
  //   paddingBottom:0,
  //   color:'#a0a0a0'
  //   // fontWeight:400
  // },
  // listStyle:{
  //   borderBottomColor:colors.greyLight,
  //   borderBottomWidth:1,
  //   justifyContent:'center',
  //   alignItems:'center',
  //   paddingTop:0,
  //   paddingBottom:0
  // },
  timeStyle: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: '#A0A0A0',
    textAlign: 'left',
    paddingLeft: 8,
    paddingRight:8,
 
  },

  bookWidthStyle: {
    display: 'none'
  },
  activeBookWidthStyle: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.yellow,
    textAlign: 'left',
    paddingLeft: 8
  },

  listItemStyle: {
    fontSize: 14,
    paddingTop: 10,
    margin: 0,
    paddingBottom: 0,
    color: colors.blueBase
    // fontWeight:400
  },
  listStyle: {
    borderRightColor: colors.greyLight,
    borderTopColor: colors.greyLight,
    borderBottomColor: colors.greyLight,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 18,
    borderLeftWidth: 6,
    borderLeftColor: colors.blueBase,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  //upload button

  buttonStyle: {
    backgroundColor: '#073488',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },

  // SERVICE SECTION
  nameStyle: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,

    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.black,
    textAlign: 'center'
  },
  activeNameStyle: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 12,
     alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.black,
    textAlign: 'center'
  },
  // About Tab 

  flatList: {
    display: "flex",
    flexDirection: "row",
    width: "100%"
  },
  facilitiesList: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    width: 60,
    backgroundColor: 'green',
    padding: 0,
    marginBottom: 0
  },
  facilitiesListImage: {
    backgroundColor: "#FDF0DC",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    borderRadius: 10,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  facilityImage: {
    height: 25,
    width: 25,
    resizeMode: "center"
  },
  aboutUsText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#000000",
    paddingTop: 8,
    paddingRight: 8,
    paddingLeft: 8
  },
  subDetailText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#000000",
    paddingTop: 8,
    paddingRight: 0,
    paddingLeft: 0
  },
  readMoreAbout: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 5,
    width: "100%",
    flexDirection: "row",
    paddingLeft: 0,
    paddingRight: 0
  },
  facilitiesSectiong: {
    paddingTop: 8,
    paddingBottom: 8,
    borderTopColor: "#AFACAC",
    borderBottomColor: "#AFACAC",
    borderStyle: "solid",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    marginTop: 8,
  },
  bookingTermSection: {
    paddingTop: 8,
    paddingBottom: 8,
    borderBottomColor: "#AFACAC",
    borderBottomWidth: 0.5,
    //marginTop: 8,
  },
  facilitiesHeading: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#000000",
    marginBottom: 5,
    paddingRight: 8,
    paddingLeft: 8
  },
  facilitiesListText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 7,
    lineHeight: 7,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#000000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingTop: 5,
    textAlign: "center",
    height: 20
  },
  mapContainer: {
    width: "100%",
    height: 158,
  },
  mapFullContainer: {
    width: "100%",
    height: '100%',
    marginTop: 8
  },
  mapStyle: { height: 158, width: "100%" },
  mapFullStyle: { height: '100%', width: "100%" },
  readMoreText: {
    fontSize: 9,
    lineHeight: 9,
    color: "#A0A0A0",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
    textTransform: "capitalize",
  },
  readMoreIcon: {
    color: "#A0A0A0",
    position: "relative",
    bottom: 1,
    left: 5
  },
  ContactSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 13,
    justifyContent: "space-between"
  },
  openingHoursdays: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 2
  },
  openingHoursTime: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 2
  },
  contactNumber: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: '#A0A0A0',
    textAlign: 'left',
    paddingLeft: 8
  },
  fromText: {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    lineHeight: 8,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: '#A0A0A0',
    paddingTop: 0,
  },
  sectionHeading: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.yellow,
    borderTopWidth: 0.5,
    borderTopColor: '#c4c4c4',
    paddingTop: 15,
    paddingBottom: 15
  },
  openingHoursText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9.5,
    lineHeight: 12,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#000000",
  },
  gotToBookingIocn: {
    fontFamily: 'proximaNova-Bold',
    fontWeight: "600",
    position: "relative",
    bottom: 2
  },
  gotToBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingRight: 8,
    marginBottom: 5,
    paddingLeft: 8
  },
  bookingHeadingSection: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 5,
    paddingLeft: 8
  },
  bookingHeading: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 14,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyDark,
    paddingTop: 10,
    paddingBottom: 10
  },
  descriptionText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    display: 'flex',
    letterSpacing: 0.4,
    color: colors.black,
    textAlign: "left"
  },
  bookActionContainer: {
    backgroundColor: colors.yellow,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 3,
    width: 52,
    paddingTop: 2,
    paddingBottom: 2
  },
  activeBookActionContainer: {
    backgroundColor: colors.pinkOpacity,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 3,
    width: 52,
    paddingTop: 3,
    paddingBottom: 3
  },


  secbookActionContainer: {
    backgroundColor: colors.greyDark,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 3,
    width: 52,
    paddingTop: 2,
    paddingBottom: 2
  },
  secactiveBookActionContainer: {
    backgroundColor: colors.pinkOpacity,
    borderWidth: 0.5,
    borderColor: colors.yellow,
    borderRadius: 3,
    width: 52,
    paddingTop: 3,
    paddingBottom: 3
  },

  bookAction: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'uppercase',
    color: colors.white
  },

  // Review Section 
  reviewContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 105,
    borderColor: "#AFACAC",
    borderTopWidth: 0.5,
    borderStyle: "solid",
  },
  ratingText: {
    fontSize: 55,
    lineHeight: 67,
    color: "#F49B13",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Bold',
    marginTop: 3,
    letterSpacing: 0.04,
    textTransform: "capitalize"
  },
  ratingIcon: {
    width: 100,
    height: 17,
  },
  reviewBottomText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#2E2959",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Bold',
    marginTop: 3,
    letterSpacing: 0.04,
    marginBottom: 5
  },
  reviewImageContainer: {
    width: 44,
    height: 44,
    borderRadius: 44,
  },
  reviewerImage: {
    width: 44,
    height: 44,
    borderRadius: 44,
    marginTop: 6,
  },
  reviewerContainer: {

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    //paddingLeft: 9,
    paddingRight: 9,
    borderTopWidth: 0.5,
    borderColor: "#AFACAC",
    borderStyle: "solid",
    paddingBottom: 4
  },
  reviewerNameBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 15,
    marginTop: 11,
    paddingTop: 8,
  },
  reviewerName: {
    fontSize: 10,
    lineHeight: 10,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "600",
    fontFamily: 'proximaNova-Bold',
    marginTop: 3,
    letterSpacing: 0.04,
    textTransform: "capitalize",
  },
  reviewDate: {
    fontSize: 10,
    lineHeight: 12,
    color: "#A0A0A0",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
    textTransform: "capitalize",
  },
  customerRequirement: {
    fontSize: 10,
    lineHeight: 12,
    color: "#A0A0A0",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
    textTransform: "capitalize",
  },
  customerReview: {
    width: "100%",
    marginTop: 2,
    paddingRight: 9,
    paddingLeft: 9,
    textAlign: "justify"
  },
  customerReviewText: {
    fontSize: 10,
    lineHeight: 10,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
    marginBottom: 5,
    textAlign: "justify",
  },
  reviewAccordian: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 2,
    paddingRight: 9,
    paddingLeft: 9
  },
  customerReviews: {
    width: 82,
    height: 14,
  },
  readMoreContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingRight: 9,
    paddingLeft: 9,
    //   position:'relative',
    //  bottom:12,
    width: 100,
    paddingTop: 2,
    paddingBottom: 2,
    // backgroundColor:'red'

  },
  reviewCollpasContainer: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 9,
    paddingRight: 9,
    marginTop: 5,
    // alignItems: "center",
    justifyContent: "flex-start"
  },
  reviewCollpasImages: {
    width: 66,
    height: 52,
    marginRight: 13,
  },
  reviewCollpasTextContainer: {
    display: "flex",
    flexDirection: "column",
    width: "78%",
    marginLeft: "18%",
    marginTop: 11,
    borderLeftColor: "#F49B13",
    borderLeftWidth: 0.5,
    borderStyle: "solid",
    paddingLeft: 3,
    marginBottom: 8
  },
  reviewCollpasText: {
    fontSize: 10,
    lineHeight: 12,
    color: "#A0A0A0",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
    textTransform: "capitalize",
  },
  ReviewTextSection: {
    marginTop: 10,
    width: "100%",
  },
  ReviewText: {
    fontSize: 10,
    lineHeight: 10,
    color: "#000000",
    fontStyle: "normal",
    fontWeight: "normal",
    fontFamily: 'proximaNova-Semibold',
    letterSpacing: 0.04,
  },
  BottomActionContainer: {
    position: "absolute",
    bottom: 40,
    right: 0,
    left: 0,
    flex: 1,
    width: widthPercentage(100),
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: 'center',
    alignContent: 'center',
    height: 53,
  },
  continue: {
    position: "absolute",
    backgroundColor: "#F49B13",
    flex: 1,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 6,
    height: 33
  },
  continueText: {
    paddingBottom: 6,
    paddingTop: 6,
    fontFamily: 'proximaNova-Bold',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
    color: "#ffffff",
    textTransform: "capitalize",
  },
  listService: {
    height: heightPercentage(100) - (220),
  },
  reviewService: {
    height: heightPercentage(100) - (120),
  },
  aboutService: {
    height: heightPercentage(100) - (120),
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
    minHeight: 226,
    backgroundColor: "white",
    borderRadius: 0,
    padding: 35,
    shadowColor: "#000",
    width: "80%",
    marginLeft: "10%",
    marginRight: "10%",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
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
    color: colors.greyDark,
    marginBottom: 20
  },
  appointmentList: {
    marginBottom: 0,
    marginLeft: 0,
    paddingLeft: 0
  },
  textStyle: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: colors.yellow,
    marginLeft: 7,
    marginBottom: 15,
    position: "relative",
    bottom: 3
  },
  spaceStyle:{
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyLight,
    textAlign: 'left',
  }
});


export default styles; 
