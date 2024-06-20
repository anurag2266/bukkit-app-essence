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

  headerText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 15,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyDark,
    marginBottom:10
  },

  infoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10.5,
    lineHeight: 11,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyDark
  },
  headerImg: {
    width: 50,
    height: 50,
  },
  iconsStyle: {
    height: 18,
    width: 15, 
    paddingLeft:40,
    paddingRight:2,
  },
  titleStyle: {
    fontFamily: 'proximaNova',
    fontSize: 11,
    lineHeight: 11,
    color: colors.greyDark,
    fontWeight: 'normal',
    textTransform: 'capitalize',
  }

});

export default styles;
