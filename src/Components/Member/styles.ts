import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  Username: {
    fontFamily: Theme.Fonts.TitleBold,
    fontSize: 18,
    color: Theme.Colors.Heading,
  },

  BulletStatus: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },

  Status: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  StatusName: {
    fontFamily: Theme.Fonts.TextRegular,
    fontSize: 14,
    color: Theme.Colors.Highlight,
  },
});
