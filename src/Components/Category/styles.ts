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
    height: 104,
    backgroundColor: Theme.Colors.Secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },

  Checked: {
    width: 12,
    height: 12,
    alignSelf: 'flex-end',
    backgroundColor: Theme.Colors.Primary,
    marginRight: 8,
    borderRadius: 6,
  },

  Check: {
    width: 16,
    height: 16,
    alignSelf: 'flex-end',
    backgroundColor: Theme.Colors.Secondary100,
    marginRight: 8,
    borderColor: Theme.Colors.Secondary50,
    borderWidth: 4,
    borderRadius: 6,
  },
  Title: {
    fontFamily: Theme.Fonts.TitleMedium,
    color: Theme.Colors.Heading,
    fontSize: 16,
  },
});
