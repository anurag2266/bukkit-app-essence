import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  dropdownArrow: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    width: '10@s',
    height: undefined,
    aspectRatio: 1.6,
    marginBottom: '7@s',
    tintColor: colors.blueLight
  }
});

export default styles;
