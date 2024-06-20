import { StyleSheet } from 'react-native';
import { ScaledSheet, scale } from '../../utils';
import { widthPercentage } from '../../utils/scaleUtil';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    alignItems: 'center'
  },

  overlayTransparent: {
    backgroundColor: 'transparent'
  },

  container: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: '11@s',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  optionsContainer: {
    width: widthPercentage(100),
    paddingHorizontal: '30@s',
    paddingBottom: '34@s'
  },

  notFirstOption: {
    marginTop: '12@s'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '70@s',
    height: undefined,
    aspectRatio: 1.01,
    borderRadius: scale(35),
    backgroundColor: colors.pink,
    shadowColor: colors.black50,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 1
  },

  buttonImage: {
    width: '43@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.white
  }
});

export default styles;
