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
  bokkingSection: {
    borderBottomWidth: 0.5,
    borderColor: "#AFACAC",
    borderStyle: "solid",
    paddingBottom: 11,
    paddingTop: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backIocn: {
    color: "#555555"
  },
  paymetMethodHeading: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.04,
    color: "#A0A0A0",
  },
  transactionHistory: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.04,
    color: "#A0A0A0",
    paddingBottom: 8,
    borderBottomColor: "#AFACAC",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    marginBottom: 15
  },
  paymentMethod: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: 12,
    width: "100%"
  },
  paymentMethodMode: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    minHeight: 35,
    marginBottom: 12,
    paddingLeft: 11,
    paddingRight: 11
  },
  activePaymentMethodMethod: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#2E2959",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    borderRadius: 5,
    minHeight: 35,
    marginBottom: 12,
    paddingLeft: 11,
    paddingRight: 11
  },
  paymentMethodText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight:13,
    letterSpacing: 0.04,
    color: "#000000",
    marginLeft: 15
  },
  
  PaymentHistory: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  paymenHistoryDetails: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    letterSpacing: 0.04,
    color: "#000000",
  },
  newCard: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    color: "#A0A0A0",
    marginBottom: 10,
    marginTop: 10
  },
  cardNum: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    color: "#555555",
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10
  },

});

export default styles;
