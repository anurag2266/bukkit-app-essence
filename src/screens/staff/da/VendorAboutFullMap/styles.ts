import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';
import { transform } from '@babel/core';

const styles = ScaledSheet.create({
  // container: {
  //   flex: 1,
  //   padding: '0@s',
  //   paddingTop: '0@s',
  //   justifyContent: 'space-between'
  // },

  container: {
    position: "absolute",
    top: -45,
    left: 0,
    right: 0,
    height:50,
    backgroundColor:'transparent',
    paddingTop: 10,
    zIndex:9
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
    // width: 28,
    // height: 27,
    marginLeft: 12,
    position: "relative",
    bottom: 10
  },
  infoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    lineHeight: 10,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    color: colors.white
  },
  headerAboutImage: {
    width: 53.5,
    height: 54
  }

});

export default styles;
