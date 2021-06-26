import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  Content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
  },

  GuildName: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
    marginBottom: 4,
  },

  OwnerName: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Highlight,
  },
});
