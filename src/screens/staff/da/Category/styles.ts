import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';
import { color } from 'react-native-reanimated';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '0@s',
    justifyContent: 'space-between'
  },
  collapseTitle: {
    color: colors.white,
    textAlign: 'left',
    paddingLeft: 15,
    paddingBottom: 10,

    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 17,
    width:'100%'
  },
  collapseActiveTitle:{
    color: colors.white,
    justifyContent:'center',
    alignItems:'center',
    textAlign: 'center',
    paddingLeft: 15,
    paddingBottom: 10,

    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    width:'100%'
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
    height: heightPercentage(16),
    borderRadius: 4
  },
  catImageStyle: {
    height: heightPercentage(16),
    borderRadius: 4
  }
});

export default styles;
