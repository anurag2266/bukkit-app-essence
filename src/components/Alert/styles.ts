import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  modal: {
    // justifyContent: 'center'
  },

  container: {
    marginTop: '80@s',
    marginHorizontal: '30@s',
    justifyContent: 'space-between',
    backgroundColor: colors.white
  },

  title: {
    marginTop: '24@s',
    marginHorizontal: '30@s'
  },

  contentContainer: {
    marginTop: '25@s',
    marginBottom: '32@s',
    marginHorizontal: '30@s'
  },

  buttonsContainer: {
    marginBottom: '13@s',
    marginHorizontal: '30@s',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  firstButton: {
    alignItems: 'flex-start'
  },

  lastButton: {
    alignItems: 'flex-end'
  }
});

export default styles;
