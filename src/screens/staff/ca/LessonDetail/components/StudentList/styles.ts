import { ScaledSheet } from '../../../../../../utils';
import textStyles from '../../../../../../styles/textStyles';
import Text, { TextVariant } from '../../../../../../components/Text';
import colors from '../../../../../../styles/colors';
import { StyleSheet } from 'react-native';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  list: {
    paddingTop: '10@s'
  },

  button: {
    marginHorizontal: '30@s',
    marginTop: '5@s'
  }
});

export const item = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '30@s',
    paddingVertical: '8@s',
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
