import { ScaledSheet } from '../../utils';
import { widthPercentage, heightPercentage } from '../../utils/scaleUtil';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: widthPercentage(100),
    height: heightPercentage(28.3),
    // aspectRatio: 1.63,
    paddingTop: '50@s',
    paddingHorizontal: '30@s',
    backgroundColor: colors.white
  },

  bgImage: {
    width: widthPercentage(112),
    height: undefined,
    aspectRatio: 1.7375
  },

  sideButton: {
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

  titleUnderline: {
    marginTop: '-7@s',
    marginLeft: '3@s'
  }
});

export default styles;
