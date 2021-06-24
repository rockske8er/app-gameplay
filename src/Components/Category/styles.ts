import { StyleSheet } from 'react-native';
import { Theme } from '../../Base/Styles/Theme';

export const S = StyleSheet.create({
  Container: {
    width: 104,
    height: 120,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },

  Checked: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 12,
    height: 12,
    backgroundColor: Theme.Colors.Primary,
    borderRadius: 6,
  },

  Check: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 16,
    height: 16,
    backgroundColor: Theme.Colors.Secondary100,
    borderColor: Theme.Colors.Secondary50,
    borderWidth: 4,
    borderRadius: 6,
  },

  Title: {
    fontFamily: Theme.Fonts.TitleBold,
    color: Theme.Colors.Heading,
    fontSize: 16,
    marginTop: 20,
  },
});
