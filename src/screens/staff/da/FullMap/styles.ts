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
    top: -50,
    left: 0,
    right: 0,
    height:60,
    backgroundColor:'transparent',
    paddingTop: 10,
    zIndex:100
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
    width: 28,
    height: 27,
    marginLeft: 12,
    position: "relative",
    bottom: 10
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
    color: colors.white
  },
  headerAboutImage: {
    width: 50,
    height: 50
  }

});

export default styles;
