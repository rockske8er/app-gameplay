import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
  },

  Banner: {
    width: '100%',
    height: 234,
  },

  Members: {
    marginHorizontal: 20,
    marginTop: 24,
  },

  Content: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 30,
    paddingHorizontal: 20,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 28,
    color: Theme.Colors.Heading,
  },

  Headline: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Heading,
    lineHeight: 24,
  },

  Footer: {
    paddingHorizontal: 20,
    marginBottom: getBottomSpace() + 24,
  },
});
