import React, { useMemo, useCallback } from 'react';
import colors from '../../styles/colors';
import { ScaledSheet, scale } from '../../utils';
import { View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import Text, { TextVariant } from '../Text';

const styles = ScaledSheet.create({
  root: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  rootLeftLabel: {
    alignItems: 'center'
  },
  rootRightLabel: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  rootTopLabel: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  rootBottomLabel: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start'
  },
  switch: {
    width: '32@s',
    maxWidth: '32@s',
    height: '18@s',
    borderRadius: scale(10),
    backgroundColor: colors.greyMedium,
    position: 'relative'
  },
  switchActive: {
    backgroundColor: colors.primary400base
  },
  circle: {
    width: '10@s',
    height: '10@s',
    borderRadius: scale(5),
    backgroundColor: colors.greyLight,
    position: 'absolute',
    left: '4@s',
    top: '4@s'
  },
  circleActive: {
    left: undefined,
    right: '4@s',
    backgroundColor: colors.white
  },
  label: {},
  topLabel: {
    marginBottom: '9@s'
  },
  bottomLabel: {
    marginTop: '9@s'
  },
  leftLabel: {
    marginRight: '9@s'
  },
  rightLabel: {
    marginLeft: '9@s'
  }
});

export type SwitchProps = {
  value?: boolean;
  onChange?: (nextValue: boolean) => void;
  style?: StyleProp<ViewStyle>;
  label?: string;
  labelStyle?: StyleProp<ViewStyle>;
  labelPosition?: 'top' | 'right' | 'bottom' | 'left';
};

export default ({
  style,
  value = false,
  onChange,
  labelPosition = 'right',
  labelStyle: _labelStyle,
  label
}: SwitchProps) => {
  const rootStyle = useMemo(() => {
    let rootWithLabelStyle: object = styles.rootRightLabel;

    if (labelPosition === 'top') {
      rootWithLabelStyle = styles.rootTopLabel;
    } else if (labelPosition === 'bottom') {
      rootWithLabelStyle = styles.rootBottomLabel;
    } else if (labelPosition === 'left') {
      rootWithLabelStyle = styles.rootLeftLabel;
    }

    return [styles.root, rootWithLabelStyle, style];
  }, [labelPosition, style]);

  const switchStyle = useMemo(
    () => (value ? [styles.switch, styles.switchActive] : styles.switch),
    [value]
  );

  const circleStyle = useMemo(
    () => (value ? [styles.circle, styles.circleActive] : styles.circle),
    [value]
  );

  const labelStyle = useMemo(() => {
    let labelPositionStyle: object = styles.rightLabel;
    if (labelPosition === 'top') {
      labelPositionStyle = styles.topLabel;
    } else if (labelPosition === 'bottom') {
      labelPositionStyle = styles.bottomLabel;
    } else if (labelPosition === 'left') {
      labelPositionStyle = styles.leftLabel;
    }

    return [styles.label, labelPositionStyle];
  }, [labelPosition, _labelStyle]);

  const handlePress = useCallback(() => {
    if (onChange) {
      onChange(!value);
    }
  }, [onChange, value]);

  return (
    <TouchableOpacity onPress={handlePress} style={rootStyle}>
      {!!label && (
        <Text variant={TextVariant.Heading4GreyDarkRegular} style={labelStyle}>
          {label}
        </Text>
      )}
      <View style={switchStyle}>
        <View style={circleStyle} />
      </View>
    </TouchableOpacity>
  );
};
