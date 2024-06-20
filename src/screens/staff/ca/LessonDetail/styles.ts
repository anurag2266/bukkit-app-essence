import { ScaledSheet } from '../../../../utils';
import textStyles from '../../../../styles/textStyles';
import { TextVariant } from '../../../../components/Text';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  detailsContainer: {
    padding: '30@s',
    paddingBottom: '15@s'
  },

  headerTitle: {
    ...textStyles[TextVariant.Heading1GreyDarkRegular]
  },

  input: {
    marginTop: '19@s'
  },

  timeContainer: {
    flexDirection: 'row'
  },

  beginContainer: {
    flex: 1,
    marginRight: 10
  },

  timeInput: {
    width: '70@s'
  },
  checkOnlineAttendanceButton: {
    marginTop: '15@s'
  }
});

export default styles;
