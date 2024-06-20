import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';
import textStyles from '../../styles/textStyles';

import { TextVariant } from '../Text';

const styles = ScaledSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end'
  },

  container: {
    height: '60%',
    padding: '30@s',
    paddingTop: '20@s',

    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.white
  },

  lesson: {
    textAlign: 'center'
  },

  hours: {
    textAlign: 'center'
  },

  list: {
    marginTop: '30@s'
  },

  listRow: {
    flexDirection: 'row',
    marginVertical: '5@s'
  },

  columnHeader: {
    ...textStyles[TextVariant.Heading4GreyDarkBold],
    textTransform: 'uppercase'
  },

  columnValue: {
    ...textStyles[TextVariant.Heading4GreyDarkRegular],
    textTransform: 'lowercase'
  },

  dateColumn: {
    width: '30%',
    marginRight: '5@s'
  },

  inColumn: {
    width: '20%',
    marginRight: '5@s'
  },

  outColumn: {
    width: '20%',
    marginRight: '5@s'
  },

  attendedColumn: {
    width: '30%'
  }
});

export default styles;
