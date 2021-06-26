import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    flex: 1,
  },

  Form: {
    paddingHorizontal: 20,
    marginTop: 32,
  },

  Select: {
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.Colors.Secondary50,
    borderRadius: 8,
    paddingRight: 24,
    overflow: 'hidden',
  },

  SelectBody: {
    flex: 1,
    alignItems: 'center',
  },

  Image: {
    width: 64,
    height: 68,
    backgroundColor: Theme.Colors.Secondary40,
    borderWidth: 1,
    borderColor: Theme.Colors.Secondary50,
    borderRadius: 8,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
  },

  TextLimit: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Highlight,
  },

  Footer: {
    marginVertical: 20,
    marginBottom: 56,
  },

  Field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },

  Divider: {
    marginRight: 4,
    fontFamily: Theme.Fonts.TextMedium,
    fontSize: 16,
    color: Theme.Colors.Highlight,
  },

  Collumn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
