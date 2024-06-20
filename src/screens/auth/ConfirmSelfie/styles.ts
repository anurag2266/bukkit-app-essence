import { ScaledSheet } from '../../../utils';
import colors from '../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: '30@s'
  },

  faceBox: {
    marginTop: '63@s',
    marginBottom: '49@s',
    height: '283@s',
    width: undefined,
    aspectRatio: 0.72,
    alignSelf: 'center',
    backgroundColor: colors.greyLight,
    transform: [{ scaleX: -1 }],

  },

  usePhotoButton: {
    marginTop: '15@s'
  }
});

export default styles;
