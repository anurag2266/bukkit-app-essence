import { ScaledSheet } from '../../utils';
import { widthPercentage, heightPercentage } from '../../utils/scaleUtil';
import colors from '../../styles/colors';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    width: widthPercentage(100),
    height: heightPercentage(10.4),
    paddingTop: '38@s',
    backgroundColor: colors.white
  },

  tabNamesContainer: {
    flex: 1
  },

  firstTab: {
    marginLeft: '12@s',
    marginRight: '20@s'
  },

  middleTab: {
    marginHorizontal: '20@s'
  },

  lastTab: {
    marginLeft: '20@s',
    marginRight: '12@s'
  }
});

export default styles;
