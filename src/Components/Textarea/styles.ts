import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    height: 120,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Theme.Colors.Secondary40,
    color: Theme.Colors.Heading,
    borderRadius: 8,
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    borderWidth: 1,
    borderColor: Theme.Colors.Secondary50,
    textAlignVertical: 'top',
  },
});
