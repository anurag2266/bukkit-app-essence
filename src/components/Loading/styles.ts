import { ScaledSheet, scale } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00000088",
    zIndex: 2,
  },
});

export default styles;
