import { ScaledSheet, scale } from '../utils';
import { TextVariant, TextFontFamily } from '../components/Text/enums';

import colors from './colors';
import { widthPercentage } from 'utils/scaleUtil';

const styles = ScaledSheet.create({
  base: {
    color: colors.greyDark,
    fontSize: scale(12)
  },

  [TextVariant.TitleMainWhite]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(50),
    letterSpacing: 0,
    color: colors.white
  },
  [TextVariant.TitleMainPink]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(40),
    letterSpacing: 0,
    color: colors.pink
  },
  [TextVariant.Heading1White]: {
    fontFamily: TextFontFamily.Medium,
    fontSize: scale(24),
    letterSpacing: 0,
    color: colors.white
  },
  [TextVariant.Heading1Grey]: {
    fontFamily: TextFontFamily.Bold,
    fontWeight:'600',
    fontSize: 16,
    lineHeight:20,
    letterSpacing: 0.04,
    color: colors.greyDark
  },
  [TextVariant.Heading1GreyDarkRegular]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(24),
    letterSpacing: 0,
    color: colors.greyDark
  },
  [TextVariant.Heading1BlueRegular]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(24),
    letterSpacing: 0,
    color: colors.blueLight
  },
  [TextVariant.Heading2White]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(18),
    letterSpacing: 0,
    color: colors.white
  },
  [TextVariant.Heading2GreyRegular]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(18),
    lineHeight: scale(23),
    letterSpacing: 0,
    color: colors.grey
  },
  [TextVariant.Heading2GreyBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(18),
    lineHeight: scale(23),
    letterSpacing: 0,
    color: colors.grey
  },
  [TextVariant.Heading2GreyDarkBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(18),
    lineHeight: scale(23),
    letterSpacing: 0,
    color: colors.greyDark
  },
  [TextVariant.Heading2RedBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(18),
    lineHeight: scale(21),
    letterSpacing: 0,
    color: colors.redAlert
  },
  [TextVariant.Heading4GreyDarkRegular]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.greyDark
  },
  [TextVariant.Heading4White]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.white
  },
  [TextVariant.Heading4Pink]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.pink
  },
  [TextVariant.Heading4PinkBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.pink
  },
  [TextVariant.Heading4GreyMediumRegular]: {
    fontFamily: TextFontFamily.Regular,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.greyMedium
  },
  [TextVariant.Heading4GreyMediumBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.greyMedium
  },
  [TextVariant.Heading4PinkBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.pink
  },
  [TextVariant.Heading4BlueBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.blueLight
  },
  [TextVariant.Heading4WhiteBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.white
  },
  [TextVariant.Heading4GreyDarkBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.greyDark
  },
  [TextVariant.Heading4GreyBold]: {
    fontFamily: TextFontFamily.Bold,
    fontSize: scale(12),
    letterSpacing: 0,
    color: colors.grey
  },
   
});

export default styles;
