import * as React from "react";
import {
  Image, StyleSheet,
} from "react-native";
import Animated from "react-native-reanimated";
import { Album, MAX_HEADER_HEIGHT, HEADER_DELTA } from "./Model";
import { BUTTON_HEIGHT } from "./ShufflePlay";

interface CoverProps {
  album: Album;
  y: Animated.Value<number>;
}

const { interpolate, Extrapolate } = Animated;

export default ({ album: { cover }, y }: CoverProps) => {
  const CoverScale: any = interpolate(y, {
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [4, 1],
    extrapolateRight: Extrapolate.CLAMP,
  });
  const CoverOpacity = interpolate(y, {
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View style={[styles.coverContainer, { transform: [{ CoverScale }] }]}>
      <Image style={styles.coverImage} source={cover} />
      {/* <Animated.View
        style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", CoverOpacity }}
      /> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
    coverContainer: {
    ...StyleSheet.absoluteFillObject,
    height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
  },
  coverImage: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
  },
});
