import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  User: {
    flexDirection: 'row',
  },
  Greating: {
    //fontSize: 24
    fontFamily: Theme.Fonts.TitleMedium,
    fontSize: 18,
    color: Theme.Colors.Heading,
    marginRight: 6,
  },

  Username: {
    //fontSize: 24
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
  },

  Message: {
    fontFamily: Theme.Fonts.TextRegular,
    color: Theme.Colors.Highlight,
  },
});
