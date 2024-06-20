import React from 'react';
import { View, Image } from 'react-native';
import Text, { TextVariant } from '../../../../../../components/Text';

import { ScaledSheet } from '../../../../../../utils';
import colors from '../../../../../../styles/colors';
import { localization, images } from '../../../../../../constants';

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: '8@s',
    paddingHorizontal: '30@s',
    alignItems: 'center',
    backgroundColor: colors.greyLight
  },

  statusContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  checkinContainer: {
    marginRight: '10@s',
    justifyContent: 'flex-start'
  },

  checkoutContainer: {
    marginLeft: '10@s',
    justifyContent: 'flex-end'
  },

  label: {
    textTransform: 'uppercase',
    marginRight: '20@s'
  },

  statusImage: {
    width: '22@s',
    height: undefined,
    aspectRatio: 1
  }
});

type ApprovalStatusProps = {
  checkinValue: number;
  checkoutValue: number;
};

const getStatusElement = (value: number) => {
  if (value === 0) {
    return (
      <Image
        style={styles.statusImage}
        source={images.checkmark}
        resizeMode="contain"
      />
    );
  }

  return <Text variant={TextVariant.Heading2RedBold}>{value}</Text>;
};

const ApprovalStatus = ({
  checkinValue,
  checkoutValue
}: ApprovalStatusProps) => (
  <View style={styles.container}>
    <View style={[styles.statusContainer, styles.checkinContainer]}>
      <Text style={styles.label} variant={TextVariant.Heading4GreyDarkBold}>
        {localization.checkin}
      </Text>

      {getStatusElement(checkinValue)}
    </View>

    <View style={[styles.statusContainer, styles.checkoutContainer]}>
      <Text style={styles.label} variant={TextVariant.Heading4GreyDarkBold}>
        {localization.checkout}
      </Text>

      {getStatusElement(checkoutValue)}
    </View>
  </View>
);

export default ApprovalStatus;
