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
  singupText: {
    fontFamily: 'proximaNova-Bold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#000000",
    marginBottom: 30
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
    width: "8%",
    backgroundColor: "transparent"
  },
  cancel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: 27,
    right: 8,
    width: "8%",
    backgroundColor: "transparent"
  },
  emailInput: {
    borderBottomColor: "transparent",
    fontSize: 14,
    fontFamily: "proximaNova",
    paddingLeft: 35,
    paddingRight: 35
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
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginLeft: "10%",
    height: 33,
    marginTop: 15
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
});

export default styles;
