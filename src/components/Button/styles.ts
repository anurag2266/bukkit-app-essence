import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    height: '45@s',
    padding: '8@s',
    justifyContent: 'center',
    borderRadius: 4
  },
  disabled: {
    opacity: 0.5
  },

  title: {
    textAlign: 'center'
  },

  pinkButton: {
    backgroundColor: colors.pink
  },

  redButton: {
    backgroundColor: colors.redAlert
  },

  darkRedButton: {
    backgroundColor: colors.error400
  },

  greyButton: {
    backgroundColor: colors.greyLight
  },

  orangeButton: {
    backgroundColor: colors.orangeAlert
  },

  greenButton: {
    backgroundColor: colors.success400
  },
  
  yellowButton: {
    backgroundColor: colors.yellowOpacity75,
  },

  clearButton: {
    backgroundColor: 'transparent'
  }
});

export default styles;
