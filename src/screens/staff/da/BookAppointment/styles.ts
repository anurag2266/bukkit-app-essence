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

  item: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    //borderRadius: 5,
    padding: 10,
    paddingTop:15,
    paddingBottom:15,
    marginRight: 10,
    marginLeft:10,
    borderBottomWidth:0.5,
    borderBottomColor:'#acacac',
    // backgroundColor:'red',
  },
  itemText:{
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 13,
    lineHeight: 15,
    color: "#000",
    letterSpacing:0.04

  },
  avatarContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-start'
  },
  emptyDate: {
    marginTop: 5,
    marginRight: 10,
    borderTopWidth: 0,
    borderTopColor: '#dddddd',
    height: heightPercentage(100)-100,
  },
  itemStyle:{
    flex: 1,
    flexDirection: 'row',
    //borderRadius: 5,
    padding: 10,
    paddingTop: 10,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: '#acacac',
    borderTopWidth: 0.25,
    borderTopColor: '#acacac',
    backgroundColor: 'white',
    alignItems: "center",
  },
  activeItemStyle:{
    flex: 1,
    flexDirection: 'row',
    //borderRadius: 5,
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    paddingRight: 10,
    paddingLeft: 10,
    borderBottomWidth: 0.25,
    borderBottomColor: '#acacac',
    borderTopWidth: 0.25,
    borderTopColor: '#acacac',
    backgroundColor: colors.pinkOpacity,
    alignItems: "center",
  },
  itemActive:{
    flex: 1,
    flexDirection: 'row',
    //borderRadius: 5,
    padding: 10,
    paddingTop:15,
    paddingBottom:15,
    marginRight: 10,
    marginLeft:10,
    borderBottomWidth:0.5,
    borderBottomColor:'#acacac',
    backgroundColor:'red'
   // backgroundColor:'rgba(244,155,19,0.15)'
  },
  BottomActionContainer: {
    position: "absolute",
    bottom: 0,
    right:0,
    left:0,
    flex: 1,
    width: widthPercentage(100),
    paddingTop:10,
    paddingBottom:10,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: 'center',
    alignContent:'center',
    height: 53,
  },
  continue: {
    position: "absolute",
    backgroundColor: "#F49B13",
    flex: 1,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: 'center',
    alignContent:'center',
    borderRadius: 6,
    height: 33
  },
  continueText: {
    paddingBottom: 6,
    paddingTop: 6,
    fontFamily: 'proximaNova-Bold',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 15,
    color: "#ffffff",
    textTransform: "capitalize",
  },
  readMoreIcon: {
    color: "#A0A0A0",
    // position: "relative",
    // bottom: 1,
    // left: 5
  },
  noAppointmentImg: {
    width: 48,
    height: 55
  },
  noAppointmentTextTop:{
    textAlign:'center',
    fontSize:11,
    fontFamily:'proximaNova',
    fontWeight:'normal',
    color:colors.black,
    lineHeight:15,
    marginBottom:10
  },
  noAppointmentText:{
    textAlign:'center',
    fontSize:11,
    fontFamily:'proximaNova',
    fontWeight:'normal',
    color:colors.black,
    lineHeight:13,
    },
    jumpLink:{
      textAlign:'center',
      fontSize:11,
      fontFamily:'proximaNova',
      fontWeight:'normal',
      color:colors.yellow,
      lineHeight:13,

    }
});

export default styles;
