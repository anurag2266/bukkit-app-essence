import { ScaledSheet, scale } from '../../../utils';
import colors from '../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '30@s'
  },

  faceOval: {
    marginTop: '63@s',
    marginBottom: '49@s',
    height: '283@s',
    width: undefined,
    aspectRatio: 1,
    borderRadius: scale(141.5),
    backgroundColor: colors.greyLight,
    transform: [{ scaleX: 0.72 }],
    overflow: 'hidden',
  },
  invertedFaceOval: {
    transform: [{ scaleX: -0.72 }],
  },
  takePicture: {
    marginTop: '60@s'
  }
});

export default styles;
