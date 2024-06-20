import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '10@s',
    justifyContent: 'space-between',
    height:50,
    alignItems:'center',
    alignContent:'center'
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
  headerText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyDark
  },
  infoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9.5,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    color: "#555555"
  },
  callButton: {
    backgroundColor: "#F49B13",
    borderColor: "#F49B13",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: 3,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5,
    elevation: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    height: 18,
    width: 51
  },
  callText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#ffffff"
  },
  jobSection: {
    display: "flex",
    borderLeftWidth: 2,
    borderLeftColor: "#F49B13",
    borderStyle: "solid",
    paddingLeft: 13,
    marginTop: 10
  },
  daytimeContainer: {
    backgroundColor: "#FDF0DC", 
    paddingTop: 3, 
    paddingBottom: 3, 
    paddingLeft: 6, 
    paddingRight: 9,
  },
  dayTimeSection: {
    display: "flex",
    flexDirection: "row",
  },
  payMentDate: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    letterSpacing: 0.04,
    color: colors.greyDark,
  },
  timeSection: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#F49B13",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 3,
    paddingTop: 3
  },
  time: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#A0A0A0"
  },
  waitingTime: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 7,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#A0A0A0",
    lineHeight: 15,
    marginLeft: 6,
    position: "relative",
    top: 7,
    right: 9
  },
  amend: {
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#2E2959",
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 3,
    width: 95,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 12,
    marginRight: 12
  },
  amendText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 11,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#000000"
  },
  buttonSection: {
    display: "flex", 
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    zIndex: 100,
    position: "relative",
    bottom: 13,
    marginBottom: 5
  },
  accheaderText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#555555"
  },
  accAddress: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9.5,
    letterSpacing: 0.04,
    color: "#555555",
  },
  collapseheaderText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#000000",
    flex: 2
  },

});

export default styles;
