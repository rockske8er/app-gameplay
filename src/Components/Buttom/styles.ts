import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    height: 56,
    backgroundColor: Theme.Colors.Primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  IconBox: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1,
    borderRightColor: Theme.Colors.Line,
  },

  Icon: { width: 24, height: 18 },

  Title: {
    flex: 1,
    fontSize: 16,
    fontFamily: Theme.Fonts.TextMedium,
    color: Theme.Colors.Heading,
    textAlign: 'center',
  },
});
