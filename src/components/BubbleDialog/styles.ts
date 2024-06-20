import { ScaledSheet } from '../../utils';
import { widthPercentage, heightPercentage } from '../../utils/scaleUtil';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    width: widthPercentage(100),
    height: heightPercentage(87),
    // height: undefined,
    // aspectRatio: 0.53,
    paddingTop: '85@s',
    paddingBottom: '35@s',
    paddingHorizontal: '30@s',
    justifyContent: 'space-between'
  },

  bgImage: {
    flex: 1,
    width: undefined,
    height: undefined
  },

  content: {
    marginHorizontal: '30@s'
  },

  body: {
    marginTop: '16@s'
  },

  closeButton: {
    width: '33@s',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'flex-end'
  },

  closeImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    tintColor: colors.white
  }
});

export default styles;
