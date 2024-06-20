import { ScaledSheet, scale } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '30@s'
  },
  faceOvalContent: {
    flex: 1,
    transform: [{ scaleX: 1.39 }]
  },
  faceOvalContentInverted: {
    flex: 1,
    transform: [{ scaleX: -1.39 }]
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
    overflow: 'hidden'
  }
});

export default styles;
