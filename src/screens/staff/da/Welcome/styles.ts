import { ScaledSheet } from '../../../../utils';
import { widthPercentage, heightPercentage } from '../../../../utils/scaleUtil';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '0@s',
    marginBottom:0,
    justifyContent: 'space-between'
    },

  introText: {
    fontFamily:'proximaNova-Semibold',
    marginLeft: '0@s',
    marginRight: '0@s',
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  buttonContainer:{
    //height: heightPercentage(100),
   // backgroundColor:'grey',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    position:'relative',
    // backgroundColor:'red'
  },
  logMeInButton: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign:'center',
    width: widthPercentage(70),
    position:'absolute',
    bottom:heightPercentage(6),
    fontSize:12   
  },
  backgroundImage: {
    width: widthPercentage(100),
    height: "100%",
    paddingHorizontal: '0@s',
    paddingBottom: 0,
    marginBottom:0,
    flex: 1
  },
  logoImage: {
    height: heightPercentage(15),
    aspectRatio: 1,
    marginTop:'20%',
    marginBottom: '20@s',
  }
});

export default styles;
