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


  appTitle: {
    fontFamily: 'proximaNova-Bold',
    fontSize: 12,
    lineHeight: 14,
    color: colors.greyDark,
    textTransform: 'capitalize',
    fontWeight: "600",
    marginBottom: 9
  },
  appBottomText: {
    fontFamily: 'proximaNova',
    fontSize: 12,
    lineHeight: 14,
    // color: colors.greyDark,
    fontWeight: "normal",
    color:'#5555'
  },
  updateAppText:{
    fontFamily: 'proximaNova',
    fontSize: 9.5,
    lineHeight: 10,
    // color: colors.greyDark,
    textTransform: 'capitalize',
    fontWeight: "normal",
    color:'#a0a0a0'
  }
});

export default styles;
