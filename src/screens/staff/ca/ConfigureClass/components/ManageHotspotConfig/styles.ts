import { ScaledSheet } from '../../../../../../utils';
import colors from '../../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: 0
  },

  configList: {
    height: '204@s'
  },

  highlightedListItem: {
    backgroundColor: colors.blueLighter30
  },

  icon: {
    flex: 1,
    width: undefined,
    height: undefined,
    tintColor: colors.greyMedium
  },

  iconContainer: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1.07
  },

  trashImage: {
    width: '23@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.redAlert
  },

  form: {
    marginTop: '27@s',
    paddingHorizontal: '30@s'
  }
});

export default styles;
