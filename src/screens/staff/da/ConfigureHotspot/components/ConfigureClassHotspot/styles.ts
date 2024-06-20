import { ScaledSheet } from '../../../../../../utils';
import colors from '../../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: 0
  },

  hotspotList: {
    height: '136@s'
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

  configListContainer: {
    marginTop: '29@s'
  },

  configListTitle: {
    paddingHorizontal: '30@s',
    marginBottom: '25@s'
  }
});

export default styles;
