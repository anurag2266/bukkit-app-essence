import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    // paddingTop: '10@s',
    justifyContent: 'space-between',
    //height:70,
    alignItems:'center',
    alignContent:'center'
  },
  callButton: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 10,
    letterSpacing: 0.04,
    color: colors.white
  },
  messageTimeAndNameContainerRight:{
    alignContent:'flex-end',
     paddingRight:20
  },
  messageTimeAndNameContainerLeft:{
    alignContent:'flex-start',
    //paddingLeft:20
  },
  timeRightStyle:{
    textAlign:'right'
  },
  timeLeftStyle:{
    paddingLeft:15
  },
  messageTime:{
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight:9,
    letterSpacing: 0.04,
    color: '#555',
    padding:5
  }

});

export default styles;
