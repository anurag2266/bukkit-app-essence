import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '0@s',
    justifyContent: 'space-between'
  },
  userName: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: colors.black
  },
  confirmation: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 17,
    textAlign: 'center',
    color: colors.black
  },
  appointmentTime: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    letterSpacing: 0.04,
    color: colors.greyDark
  },
  appointmentDate: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: colors.greyDark,
    paddingBottom:4
  },
  appointmentAddress: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 14,
    textAlign: 'center',
    color: colors.greyDark,
    paddingBottom:4
  },
  addToCalendar: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    textTransform: 'capitalize',
    color: colors.yellow,
    paddingTop: 10,
  },
  actionButton: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    color: colors.white,
  },
  confirmIcon: {
    width: 94,
    height: 94,
    justifyContent: 'center',
    alignContent: 'center'
  },
  centerText:{
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center' 
  },

  confimartionContainer:{ 
    backgroundColor:colors.pinkOpacity,
    height:"100%",
    width: "100%"
   },
   iconContainer:{
   height:heightPercentage(25),
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'center'
   },
   userInfoContainer:{
     flexDirection: 'row',
     height:heightPercentage(20),
    //  backgroundColor:'#ccc',
     justifyContent:'center',
     paddingTop:'5%'
     //alignItems:'center'
   },
   timeContainer:{
     height:heightPercentage(6),
      // backgroundColor:'grey'
   },
   dateContainer:{
     height:heightPercentage(5)
   },
   calendarAction:{
     flexDirection:'row',
     height:heightPercentage(20)
   },
   actionBtnContainer:{
     height:35,
     backgroundColor:colors.yellow,
     width:widthPercentage(70),
     borderRadius:6
   }

});

export default styles;
