import { ScaledSheet, scale } from '../../../../../../utils';
import textStyles from '../../../../../../styles/textStyles';
import { TextVariant } from '../../../../../../components/Text';
import colors from '../../../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  content: {
    paddingBottom: '20@s'
  },

  calendar: {
    paddingVertical: '15@s',
    marginHorizontal: '30@s'
  },

  hoursContainer: {
    backgroundColor: colors.greyLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10@s',
    marginBottom: '10@s'
  }
});

export const lessonItem = ScaledSheet.create({
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

  hours: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    textAlign: 'center'
  },

  timeContainer: {
    marginTop: '8@s',
    paddingTop: '8@s',
    borderTopWidth: 1,
    borderColor: colors.black200,

    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  course: {
    ...textStyles[TextVariant.Heading4BlueBold],
    fontSize: scale(13),
    textAlign: 'center',
    textTransform: 'uppercase'
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
