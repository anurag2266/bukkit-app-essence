import { ScaledSheet } from '../../utils';
import { widthPercentage, heightPercentage } from '../../utils/scaleUtil';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    width: widthPercentage(100),
    height: heightPercentage(8),
    paddingTop: '20@s',
    paddingHorizontal: '20@s',
    backgroundColor: 'transparent'
  },

  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  sideButton: {
    justifyContent: undefined,
    alignItems: undefined,
    width: '15@s',
    height: undefined,
    aspectRatio: 1
  },

  sideButtonLeft: {
    marginRight: '10@s'
  },

  sideButtonRight: {
    marginLeft: '10@s'
  },

  sideButtonImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    tintColor: colors.white
  },

  middle: {
    flex: 1
  },

  title: {
    textAlign: 'left',
    paddingLeft:10
  }
});

export default styles;
