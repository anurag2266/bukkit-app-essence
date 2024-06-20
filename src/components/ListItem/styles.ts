import { ScaledSheet } from '../../utils';
import textStyles from '../../styles/textStyles';

import { TextVariant } from '../Text';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '30@s',
    paddingVertical: '18@s',
    alignItems: 'center'
  },

  content: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    textTransform: 'uppercase'
  },

  subtitle: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular]
  },

  leftContainer: {
    marginRight: '35@s'
  },

  rightContainer: {
    marginLeft: '5@s'
  }
});

export default styles;
