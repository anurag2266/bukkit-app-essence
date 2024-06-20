import { ScaledSheet, scale } from '../../../../utils';
import { TextVariant } from '../../../../components/Text';
import textStyles from '../../../../styles/textStyles';
import colors from '../../../../styles/colors';

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

  profile: {
    flexDirection: 'row',
    paddingHorizontal: '30@s',
    paddingTop: '14@s',
    paddingBottom: '24@s'
  },

  avatar: {
    borderWidth: 1,
    borderColor: colors.greyMedium,

    width: '138@s',
    height: undefined,
    aspectRatio: 0.97
  },

  profileInfoContainer: {
    flex: 1,
    marginLeft: '15@s'
  },

  profileInfoHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  hoursContainer: {
    marginRight: '25@s'
  },

  profileInfoHeaderLabel: {
    ...textStyles[TextVariant.Heading2GreyBold],
    color: colors.greyDark,
    textTransform: 'uppercase'
  },

  profileInfoHeaderValue: {
    ...textStyles[TextVariant.TitleMainPink],
    fontSize: scale(37),
    textTransform: 'uppercase'
  },

  name: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    textTransform: 'uppercase'
  },

  campus: {
    ...textStyles[TextVariant.Heading4GreyMediumRegular]
  },

  footer: {
    marginBottom: '20@s'
  }
});

export default styles;
