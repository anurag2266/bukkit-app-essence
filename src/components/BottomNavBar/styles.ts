import { ScaledSheet } from '../../utils';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  routeSideContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  separator: {
    width: '126@s'
  },

  bottomImage: {
    // alignSelf: 'flex-end'
  },

  routeImage: {
    width: '18@s',
    height: '18@s',
    aspectRatio: 1,
    //tintColor: colors.yellow
  },
  tabText: {
    fontFamily: 'proximaNova',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 8,
    lineHeight: 8,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    letterSpacing: 0.04,
    textTransform: 'capitalize',
    color: '#2E2959',
    marginTop: 5, marginBottom: 5
  }
});

export default styles;
