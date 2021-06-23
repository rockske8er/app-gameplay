import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
  },

  Header: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42,
  },

  Content: { marginTop: 42 },
  Matches: { marginTop: 24, marginLeft: 20 },
});
