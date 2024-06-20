import { ScaledSheet } from 'utils';
import textStyles from 'styles/textStyles';
import colors from 'styles/colors';

import { TextVariant } from 'components/Text';

const styles = ScaledSheet.create({
  header: {
    ...textStyles[TextVariant.Heading2GreyDarkBold],
    paddingHorizontal: '30@s',
    paddingTop: '18@s',
    paddingBottom: '5@s',
    backgroundColor: colors.white
  }
});

export default styles;
