import { ScaledSheet, scale } from '../../../../utils';
import { TextVariant } from '../../../../components/Text';
import textStyles from '../../../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {},

  list: {
    paddingTop: '20@s'
  },

  header: {
    ...textStyles[TextVariant.Heading4BlueBold],
    fontSize: scale(14),
    textAlign: 'center',
    textTransform: 'uppercase',

    marginVertical: '8@s'
  },

  footer: {
    marginBottom: '20@s'
  }
});

export default styles;
