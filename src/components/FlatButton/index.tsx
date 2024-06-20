import React from 'react';
import Button from '../Button';
import { TextVariant } from '../Text';

import { ScaledSheet } from '../../utils';
import textStyles from '../../styles/textStyles';

const styles = ScaledSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    borderRadius: 0
  }
});

type ButtonProps = React.ComponentProps<typeof Button>;
type ButtonType = ButtonProps['type'];

type FlatButtonProps = ButtonProps;

const getTitleVariant = (type: ButtonType) => {
  switch (type) {
    case 'pink':
    case 'red':
    case 'orange':
      return TextVariant.Heading4WhiteBold;
    case 'clear':
    case 'grey':
    default:
      return TextVariant.Heading4GreyBold;
  }
};

const FlatButton = ({ style, titleStyle, type, ...props }: FlatButtonProps) => {
  const titleVariant = getTitleVariant(type);
  const titleVariantStyle = textStyles[titleVariant];

  return (
    <Button
      style={[styles.container, style]}
      titleStyle={[titleVariantStyle, titleStyle]}
      type={type}
      {...props}
    />
  );
};

export default FlatButton;
