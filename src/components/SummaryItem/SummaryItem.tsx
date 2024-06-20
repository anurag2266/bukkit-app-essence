import * as React from 'react';
import {
  View,
  TouchableOpacity,
  ImageSourcePropType,
  Image,
  StyleProp,
  ViewStyle
} from 'react-native';

import styles from './styles';
import { Text } from 'components/';
import { TextVariant } from 'components/Text';

type SummaryItemProps = {
  style?: StyleProp<ViewStyle>;
  icon: ImageSourcePropType;
  title: string;
  subtitle?: string;
  badge?: number;
  onPress?: () => void;
};

const SummaryItem = ({
  style,
  icon,
  title,
  subtitle = '',
  badge = 0,
  onPress
}: SummaryItemProps) => (
  <TouchableOpacity
    style={[styles.container, style]}
    disabled={!onPress}
    onPress={onPress}
  >
    <View style={styles.iconContainer}>
      <Image source={icon} style={styles.icon} />
    </View>

    <View style={styles.content}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>

        {!!badge && (
          <View style={styles.badge}>
            <Text style={styles.badgeValue}>{badge}</Text>
          </View>
        )}
      </View>

      <Text style={styles.subtitle} variant={TextVariant.Heading4PinkBold}>
        {subtitle}
      </Text>
    </View>
  </TouchableOpacity>
);

export default SummaryItem;
