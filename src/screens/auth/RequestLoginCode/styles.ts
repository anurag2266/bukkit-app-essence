import { ScaledSheet } from '../../../utils';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '30@s',
    paddingTop: '35@s',
    justifyContent: 'space-between'
  },

  content: {
    paddingLeft: '30@s'
  },

  introText: {
    marginRight: '15@s'
  },

  inputsContainer: {
    flexDirection: 'row',
    paddingTop: '20@s'
  },

  countryCodeInput: {
    width: '50@s',
    marginRight: '10@s'
  },

  mobileNumberInput: {
    flex: 1
  },

  changedMyNumberLink: {
    marginLeft: '60@s'
  }
});

export default styles;
