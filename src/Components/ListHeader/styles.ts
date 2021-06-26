import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
  },

  Subtitle: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Highlight,
  },
});
