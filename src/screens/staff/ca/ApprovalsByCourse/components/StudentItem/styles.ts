import { ScaledSheet } from '../../../../../../utils';
import textStyles from '../../../../../../styles/textStyles';
import { TextVariant } from '../../../../../../components/Text';
import colors from '../../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '30@s',
    paddingVertical: '8@s'
  },

  bottomContainer: {
    marginTop: '5@s',
    flexDirection: 'row',
    alignItems: 'center'
  },

  content: {
    flex: 1,
    marginHorizontal: '20@s'
  },

  name: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    textAlign: 'center',
    textTransform: 'uppercase'
  },

  timeContainer: {
    marginTop: '8@s',
    paddingTop: '8@s',
    borderTopWidth: 1,
    borderColor: colors.black200,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  date: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center'
  },

  time: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textTransform: 'lowercase'
  },

  icon: {
    width: '42@s',
    height: undefined,
    aspectRatio: 1
  },

  globeIcon: {
    tintColor: colors.success400
  }
});

export default styles;
