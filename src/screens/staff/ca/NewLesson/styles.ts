import { ScaledSheet } from '../../../../utils';
import textStyles from '../../../../styles/textStyles';
import { TextVariant } from '../../../../components/Text';
import colors from '../../../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1
  },

  content: {
    flex: 1,
    paddingHorizontal: '30@s'
  },

  lessonTypeHeader: {
    marginTop: '20@s',
    flexDirection: 'row',
    alignItems: 'center'
  },

  lessonTypeList: {
    maxHeight: '335@s',
    marginBottom: '15@s'
  },

  headerTitle: {
    ...textStyles[TextVariant.Heading1GreyDarkRegular],
    flex: 1
  },

  refresh: {
    padding: '5@s'
  },

  input: {
    marginTop: '19@s'
  },

  dropdownArrow: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    width: '10@s',
    height: undefined,
    aspectRatio: 1.6,
    marginBottom: '7@s',
    tintColor: colors.blueLight
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

  daySelect: {
    width: '156@s'
  },
  button: {
    marginTop: '40@s',
    marginBottom: '5@s'
  }
});

export default styles;
