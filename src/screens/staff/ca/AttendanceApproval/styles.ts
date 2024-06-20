import { ScaledSheet, scale } from '../../../../utils';
import { TextVariant } from '../../../../components/Text';
import textStyles from '../../../../styles/textStyles';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    paddingHorizontal: '30@s',
    paddingTop: '15@s'
  },

  profile: {
    alignItems: 'center'
  },

  avatar: {
    width: '106@s',
    height: undefined,
    aspectRatio: 1
  },

  name: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center',
    marginVertical: '10@s'
  },

  attendanceType: {
    width: '30@s',
    height: undefined,
    aspectRatio: 1,
    tintColor: colors.blueLight
  },

  course: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    fontSize: scale(13),
    textAlign: 'center',
    textTransform: 'uppercase',
    marginVertical: '5@s'
  },

  date: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center',
    marginVertical: '5@s'
  },

  verificationEvents: {
    marginVertical: '10@s'
  },

  rejectButton: {
    marginTop: '16@s'
  }
});

export const verificationEventItem = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },

  timeContainer: {
    justifyContent: 'center'
  },

  time: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textAlign: 'center',
    backgroundColor: colors.white
  },

  separatorLine: {
    position: 'absolute',
    height: '100%',
    width: 1,
    backgroundColor: colors.greyMedium,
    alignSelf: 'center'
  },

  halfSeparatorLine: {
    height: '50%',
    bottom: 0
  },

  iconContainer: {
    marginVertical: '18@s',
    marginHorizontal: '30@s'
  },

  icon: {
    width: '20@s',
    height: undefined,
    aspectRatio: 1
  },

  greyIcon: {
    tintColor: colors.black200
  },

  status: {
    flex: 1,
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    alignSelf: 'center'
  }
});

export default styles;
