import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  GuildIconContainer: {
    height: 68,
    width: 64,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  Content: {
    flex: 1,
  },

  Header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
  },

  Category: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Highlight,
    marginRight: 24,
  },

  Footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  DateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Date: {
    fontFamily: Theme.Fonts.TextMedium,
    fontSize: 14,
    color: Theme.Colors.Heading,
    marginLeft: 8,
  },

  PlayerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Player: {
    fontFamily: Theme.Fonts.TextMedium,
    fontSize: 14,
    color: Theme.Colors.Heading,
    marginLeft: 8,
    marginRight: 24,
  },
});
