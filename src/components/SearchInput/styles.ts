import { ScaledSheet } from '../../utils';
import { TextVariant } from '../Text';

import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {
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
  }
});

export default styles;
