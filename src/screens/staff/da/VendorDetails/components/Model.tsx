import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const φ = (1 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = 74;
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

console.log( height * (1 - 1 / φ));
export interface Track {
  name: string;
  artist?: string;
}

export interface Album {
  name: string;
  artist: string;
  release: number;
  cover: number;
  tracks: Track[];
}
