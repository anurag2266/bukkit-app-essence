import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '10@s',
    justifyContent: 'space-between',
    height:70,
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
  bokkingSection: {
    borderBottomWidth: 0.5,
    borderColor: "#AFACAC",
    borderStyle: "solid",
    paddingBottom: 11,
    paddingTop: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backIocn: {
    color: "#555555"
  },
  bookingTerms: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04,
    textTransform: "capitalize",
    color: "#2E2959",
    marginLeft: 9
  },
  bookingList: {
    display: "flex",
    flexDirection: "column",
    marginTop: 10,
    marginBottom: 15
  },
  bookingListMainText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    color: "#000000",
  },
  bookingListText: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.04,
    color: "#000000",
  },

});

export default styles;
