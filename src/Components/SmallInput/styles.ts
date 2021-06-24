import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: 48,
    height: 48,
    backgroundColor: Theme.Colors.Secondary40,
    color: Theme.Colors.Heading,
    borderRadius: 8,
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    textAlign: 'center',
    marginRight: 4,
  },
});
