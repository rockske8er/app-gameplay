import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Image: {
    width: '100%',
    height: 360,
  },

  Content: {
    marginTop: -40,
    paddingHorizontal: 50,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 40,
    color: Theme.Colors.Heading,
    textAlign: 'center',
    lineHeight: 40,
    marginBottom: 16,
  },

  Headline: {
    fontFamily: Theme.Fonts.TitleMedium,
    fontSize: 15,
    color: Theme.Colors.Heading,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 64,
  },
});
