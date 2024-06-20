/* eslint-disable no-useless-escape */
import { StyleSheet } from 'react-native';
import scale from './scaleUtil';

const scaleRegex = /"(\-?\d+(\.\d{1,2})?)@s"/g;

const scaleByAnnotation = (annotatedValue: string) => {
  const valueString = annotatedValue.replace('@s', '').replace(/"/g, '');
  const value = Number.parseFloat(valueString);

  return `${scale(value)}`;
};

const replaceJson = (key: string, value: any) =>
  typeof value === 'undefined' ? null : value;

const toStyleSheet = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  styles: T | StyleSheet.NamedStyles<T>
) => {
  const stylesString = JSON.stringify(styles, replaceJson);
  const scaledStylesString = stylesString.replace(
    scaleRegex,
    scaleByAnnotation
  );

  return JSON.parse(scaledStylesString);
};

const create = <
  T extends StyleSheet.NamedStyles<T> | StyleSheet.NamedStyles<any>
>(
  styles: T | StyleSheet.NamedStyles<T>
): T => StyleSheet.create(toStyleSheet(styles));

export default {
  create
};
