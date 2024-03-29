import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: 62,
    height: 66,
    borderRadius: 8,
    backgroundColor: Theme.Colors.Discord,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  Image: {
    width: 62,
    height: 66,
    borderRadius: 8,
  },
});
