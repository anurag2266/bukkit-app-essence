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

  introText: {
    marginLeft: '0@s',
    marginRight: '0@s',
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    lineHeight: 18,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: colors.greyDark
  },
  infoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10.5,
    lineHeight: 12,
    display: 'flex',
    alignItems: 'center',
    letterSpacing: 0.04,
    color: colors.greyDark
  },
  headerImg: {
    width: 50,
    height: 50,
  },
  jobSection: {
    display: "flex",
    borderLeftWidth: 2,
    borderLeftColor: "#F49B13",
    borderStyle: "solid",
    paddingLeft: 13,
    marginTop: 17
  },
  daytimeContainer: {
    backgroundColor: "#FDF0DC", 
    paddingTop: 3, 
    paddingBottom: 3, 
    paddingLeft: 6, 
    paddingRight: 9,
  },
  dayTimeSection: {
    display: "flex",
    flexDirection: "row",
  },
  payMentDate: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    letterSpacing: 0.04,
    color: colors.greyDark,
  },
  timeSection: {
    borderStyle: "solid",
    borderWidth: 0.5,
    borderColor: "#F49B13",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    paddingBottom: 3,
    paddingTop: 3
  },
  time: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 9.5,
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: "#A0A0A0"
  },
  totalPay: {
    width: "100%",
    borderColor: "#F49B13",
    borderWidth: 0.5,
    borderStyle: "solid",
    paddingTop: 5,
    paddingBottom: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row"
  },
  totalPayText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight:12,
    letterSpacing: 0.04,
    color: "#000000"
  },
  totalPrice: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
    letterSpacing: 0.04,
    color: "#000000",
    marginLeft: 5,
    marginTop: 2
  },
  addPromo: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 7,
    paddingBottom:30
  },
  addPromoText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 10,
    letterSpacing: 0.04,
    color: "#F49B13"
  },
  paymentMethod: {
    display: "flex",
    justifyContent: "flex-start",
    paddingTop: 30,
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
    paddingRight: 11,
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
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight:11,
    letterSpacing: 0.04,
    color: "#000000",
    marginLeft: 15
  },
  
  activepaymentMethodText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight:11,
    letterSpacing: 0.04,
    color: "#000000",
    marginLeft: 15
  },

  seeVenu: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 9,
    letterSpacing: 0.04,
    color: "#000000",
  },
  cancelation: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
    lineHeight: 9,
    letterSpacing: 0.04,
    color: "#F49B13",
    marginLeft: 3
  },
  continue: {
    backgroundColor: "#F49B13",
    marginTop: 20,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginLeft: "10%",
    height: 33,
  },
  continueText: {
    paddingBottom: 6,
    paddingTop: 6,
    fontWeight:"bold",
    fontSize: 12,
    lineHeight: 15,
    color:"#ffffff",
    textTransform: "capitalize",
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    letterSpacing: 0.04,
    marginLeft: 3
  },
  waitingTime: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 7,
    letterSpacing: 0.04,
    color: "#A0A0A0",
    lineHeight: 15,
    position: "relative",
    top: 7,
    right: 3
  },
  newCard: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 9,
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
