import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    height: 104,
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Theme.Fonts.TitleBold,
    color: Theme.Colors.Heading,
    fontSize: 20,
  },
});
