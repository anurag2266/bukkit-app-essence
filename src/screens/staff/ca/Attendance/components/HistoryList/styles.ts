import { ScaledSheet } from '../../../../../../utils';
import textStyles from '../../../../../../styles/textStyles';
import colors from '../../../../../../styles/colors';

import { TextVariant } from '../../../../../../components/Text';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  headerContainer: {
    backgroundColor: colors.greyLight,
    paddingHorizontal: '30@s',
    paddingVertical: '13@s'
  },

  inputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white
  },

  input: {
    flex: 1,
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    backgroundColor: colors.white,
    padding: '5@s'
  },

  searchIcon: {
    alignSelf: 'center',
    marginRight: '8@s',
    width: '19@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.greyLight
  },

  sectionHeader: {
    ...textStyles[TextVariant.Heading2GreyDarkBold],
    paddingHorizontal: '30@s',
    paddingTop: '18@s',
    paddingBottom: '5@s',
    backgroundColor: colors.white
  }
});

export default styles;
