import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const BarHeight = getStatusBarHeight();

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    paddingTop: BarHeight,
    justifyContent: "center",
  },
});