import { ScaledSheet, scale } from '../../utils';
import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';
import { TextVariant } from '../Text';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  iconContainer: {
    padding: '6@s',
    backgroundColor: colors.blueLight
  },

  icon: {
    width: '16@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.white
  },

  content: {
    flex: 1,
    padding: '6@s',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.greyMedium
  },

  titleContainer: {
    flexDirection: 'row'
  },

  title: {
    flex: 1,
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    fontSize: scale(13),
    textTransform: 'uppercase'
  },

  badge: {
    width: scale(17),
    height: undefined,
    aspectRatio: 1,
    borderRadius: scale(17) / 2,

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.error400
  },

  badgeValue: {
    ...textStyles[TextVariant.Heading4WhiteBold],
    fontSize: scale(10),
    textAlign: 'center'
  },

  subtitle: {
    marginTop: '6@s'
  }
});

export default styles;
