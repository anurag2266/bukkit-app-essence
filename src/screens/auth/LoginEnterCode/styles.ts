import { ScaledSheet } from '../../../utils';
import colors from '../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '0@s',
    paddingTop: '0@s',
    justifyContent: 'space-between',
  },

  passcodeInput: {
    marginTop: '83@s',
    marginBottom: '35@s'
  },

  resendLink: {
    textTransform: 'capitalize'
  },
  introText: {
    marginLeft: '0@s',
    marginRight: '0@s',
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    backgroundColor: "#F49B13",
    position: "absolute",
    bottom: 0,
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
  varification: {
    fontFamily: 'proximaNova',
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 15,
    marginBottom: 20,
    color: "#000000"
  },
  phoneNum: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 12,
    lineHeight: 13,
    color: "#000000",
    textTransform: "capitalize",
  },
  wrongNum: {
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 13,
    color: "#F49B13",
    textTransform: "capitalize",
    marginLeft: 2
  },
  root: {
    flex: 1,
     padding: 20,
     marginBottom: 15
  },
  codeFieldRoot: {
    marginTop: 40,
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: "flex",
    justifyContent: "space-between",
  },
  cellRoot: {
    width: "13%",
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#A0A0A0',
    borderBottomWidth: 1,
    marginBottom: 15
  },
  cellText: {
    color: "#A0A0A0",
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'proximaNova-Semibold',
    fontWeight: "600",
    lineHeight: 16,
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
  digitContainer: {
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    borderTopColor: "#A0A0A0",
    borderTopWidth: 0.5,
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
    paddingTop: 20,
    alignItems: "center"
  },
  digitText: {
    color: "#A0A0A0",
    fontSize: 12,
    lineHeight: 12,
    fontFamily: 'proximaNova',
    fontStyle: "normal",                                                                                                               
  },
  resendSmsContainer: {
    marginTop: 25,
    width: 95,
    height: 25,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#C6C0C0",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderRadius: 5,
  },
  resend: {
    color: "#F49B13",
    fontSize: 12,
    lineHeight: 15,
    fontFamily: 'proximaNova-Semibold',
    fontStyle: "normal",
    fontWeight: "600"
  },
});

export default styles;
