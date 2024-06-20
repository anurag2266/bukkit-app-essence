import { ScaledSheet } from '../../../utils';
import colors from '../../../styles/colors';

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
  firstTime: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#000000"
  },
  loginSection: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#AFACAC",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    marginTop: 20,
    position: "relative",
    width: "100%"
  },
  logOptionsIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 27,
    width: "13%",
    backgroundColor: "transparent"
  },
  emailInput: {
    borderBottomColor: "transparent",
    fontSize: 14,
    fontFamily: "proximaNova",
    paddingLeft: 55,
    paddingRight: 10
  },
  loginOptionSection: {
    backgroundColor: "#F9F9F9",
    paddingTop: 17,
    paddingLeft: 3,
    paddingRight: 3,
    paddingBottom: 17
  },
  loginOptionButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  facebookButton: {
    width: 95,
    height: 30,
    backgroundColor: "#4267B2",
    borderRadius: 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  facebookIcon: {
    marginRight: 5,
  },
  facebook: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#ffffff",
    textTransform: "capitalize"
  },
  googleIocn: {
    marginRight: 5
  },
  googleButton: {
  backgroundColor: "#ffffff",
  borderWidth: 0.5,
  borderStyle: "solid",
  borderRadius: 3,
  borderColor: "#C6C0C0",
  width: 95, 
  height: 30,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
  },
  google: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#000000",
    textTransform: "capitalize",
  },
  emailPhoneButton:{
    backgroundColor: "#F49B13", 
    borderRadius: 3, 
    width: 95, 
    height: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  eamilIcon: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#ffffff",
  },
  continue: {
    backgroundColor: "#F49B13",
    position: "absolute",
    bottom: 30,
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginLeft: "10%",
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
  passwordContainer: {
    display: "flex",
    flexDirection: "row",
    borderColor: "#AFACAC",
    borderBottomWidth: 0.5,
    borderStyle: "solid",
    marginTop: 20,
    position: "relative",
    width: "100%"
  },
  passwordSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 27,
    width: "7%",
    backgroundColor: "transparent"
  },
  password: {
    marginLeft: 9
  },
  passwordInput: {
    borderBottomColor: "transparent",
    fontSize: 14,
    fontFamily: "proximaNova",
    paddingLeft: 35,
    paddingRight: 35,
  },
  showPasswordIcon: {
    backgroundColor: "transparent"
  },
  showPassword: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    top: 27,
    right: 8,
    width: "7%",
    backgroundColor: "transparent"
  },
  termsCondition: {
    fontFamily: 'proximaNova',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 11,
    lineHeight: 11,
    color: "#000000",
  },
  privacy: {
    fontFamily: 'proximaNova',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 11,
    lineHeight: 11,
    color: "#F49B13",
    textDecorationColor: "#F49B13",
    textDecorationLine: "underline"
  },
  forgotPass: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 10,
    lineHeight: 12,
    color: "#2E2959",
    textTransform: "capitalize",
    position: "relative",
    bottom: 14,
    left: 3
  },
});

export default styles;