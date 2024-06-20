import * as React from 'react';
import { View, Image } from 'react-native';
import { Text } from '../../../../../../components';

import { verificationEventItem as styles } from './styles';
import { images, localization } from '../../../../../../constants';

type VerificationEventItemProps = {
  time: string;
  status: 'verified-manually' | 'verified-automatically' | 'unverified';
  firstItem?: boolean;
};

const VerificationEventItem = ({
  time,
  status,
  firstItem = false
}: VerificationEventItemProps) => {
  const isVerified =
    status === 'verified-automatically' || status === 'verified-manually';
  const icon = isVerified ? images.checkCircle : images.exclamationCircle;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.timeContainer}>
          <View
            style={[
              styles.separatorLine,
              firstItem && styles.halfSeparatorLine
            ]}
          />
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <View style={styles.iconContainer}>
        <Image
          style={[
            styles.icon,
            status === 'verified-manually' && styles.greyIcon
          ]}
          source={icon}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.status}>
        {isVerified ? localization.verified : localization.notVerified}
      </Text>
    </View>
  );
};

export default VerificationEventItem;
