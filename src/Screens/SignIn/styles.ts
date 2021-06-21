import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.Colors.Background,
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
    fontSize: 40,
    color: Theme.Colors.Heading,
    textAlign: 'center',
    marginBottom: 16,
  },

  Headline: {
    color: Theme.Colors.Heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64,
  },
});
