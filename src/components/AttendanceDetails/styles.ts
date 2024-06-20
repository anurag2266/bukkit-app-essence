import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    padding: '30@s',
    paddingBottom: 0
  },

  footer: {
    textAlign: 'right',
    textTransform: 'uppercase',
    marginTop: '10@s',
    marginBottom: '25@s'
  }
});

export const sectionHeader = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: '6@s'
  },

  column: {
    flex: 2,
    textTransform: 'uppercase'
  },

  secondColumn: {
    flex: 3,
    marginHorizontal: '3@s'
  },

  firstColumn: {
    flex: 4
  }
});

export const sectionItem = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: '6@s'
  },

  firstColumn: {
    flex: 4,
    textTransform: 'capitalize'
  },

  secondColumn: {
    flex: 3,
    marginHorizontal: '3@s'
  },

  thirdColumnContainer: {
    flex: 2,
    flexDirection: 'row'
  },

  thirdColumn: {
    flex: 1
  },

  arrow: {
    alignSelf: 'center',
    width: 6,
    height: undefined,
    aspectRatio: 0.6,
    tintColor: colors.blueLight
  }
});

export default styles;
