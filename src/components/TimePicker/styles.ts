import { ScaledSheet } from '../../utils';

import { TextVariant } from '../Text/enums';
import textStyles from '../../styles/textStyles';

const styles = ScaledSheet.create({
  input: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    borderBottomWidth: 1.7,
    padding: 0,
    paddingBottom: '4@s',
    marginTop: '10@s'
  },
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  }
});

export default styles;
