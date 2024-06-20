import { ScaledSheet } from '../../../utils';
import colors from '../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingTop: '35@s',
    paddingLeft: '60@s',
    paddingRight: '85@s'
  },

  syncIconContainer: {
    width: '70@s',
    height: undefined,
    aspectRatio: 1,
    marginVertical: '30@s'
  },

  syncIcon: {
    flex: 1,
    width: undefined,
    height: undefined,
    tintColor: colors.pink30
  }
});

export default styles;
