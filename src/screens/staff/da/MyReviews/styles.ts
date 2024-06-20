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
  reviewPosted: {
    width: 71,
    height: 18,
    borderWidth: 0.5,
    borderColor: "#4CAF50",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    marginBottom: 2,
  },
  reviewPostedText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9.5,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#4CAF50",
  },
  reviewTitle: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#2E2959",
  },
  reviewAddress: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9.5,
    letterSpacing: 0.04,
    color: "#555555",
  },
  reviewedFor: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#555555",
    marginBottom: 2,
    marginTop: 2
  },

});

export default styles;
