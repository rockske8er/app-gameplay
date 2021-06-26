import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 100,
  },

  Overlay: {
    flex: 1,
    backgroundColor: Theme.Colors.Overlay,
  },

  Bar: {
    backgroundColor: Theme.Colors.Secondary30,
    width: 40,
    height: 2,
    borderRadius: 2,
    marginTop: 14,
    marginBottom: 14,
    alignSelf: 'center',
  },
});
