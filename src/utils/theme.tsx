import {StyleSheet} from 'react-native';
import {MD3DarkTheme} from 'react-native-paper';
import color from 'color';

const padding = 15;

export const theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
  },
  dark: true,
  mode: 'adaptive',
};

export const colors = theme.colors;

export const styles = StyleSheet.create({
  // general styles
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: padding,
    gap: 5,
  },
  menuGap: {
    gap: 2,
  },
  number: {
    width: 50,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    padding: padding,
  },
  // anthem styles
  anthemTitle: {
    fontSize: 24,
    fontFamily: 'Roboto-Bold',
    color: theme.colors.onBackground,
  },
  anthemSubtitle: {
    fontSize: 18,
  },
  anthemContainer: {
    padding: padding,
    gap: 10,
    flex: 1,
  },
  anthemContainerHighlight: {
    backgroundColor: theme.colors.primaryContainer,
  },
  anthemContainerOdd: {
    backgroundColor: color(theme.colors.background).lighten(0.2).hex(),
  },
  anthemContainerEven: {},
  anthemNumber: {
    fontFamily: 'Roboto-Bold',
    color: color(theme.colors.onBackground).darken(0.5).hex(),
  },
  anthemLyrics: {
    color: theme.colors.onBackground,
    fontFamily: 'Roboto-Regular',
    paddingRight: padding / 2,
  },
  anthemChorus: {
    color: theme.colors.onBackground,
    padding: padding * 2.5,
    paddingRight: padding / 2,
    fontFamily: 'Roboto-BoldItalic',
  },
  anthemHighlight: {
    color: theme.colors.primary,
    fontFamily: 'Roboto-BlackItalic',
  },
  anthemAuthor: {
    fontFamily: 'Roboto-ThinItalic',
    fontSize: 12,
    padding: padding,
    paddingVertical: padding * 2,
  },
  // auxiliary styles
  bold: {
    fontWeight: '900',
  },
  boldItalic: {
    fontWeight: '900',
    fontStyle: 'italic',
  },
  centered: {
    textAlign: 'center',
  },
  stretched: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  spaceAround: {
    justifyContent: 'space-around',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  spaceEvenly: {
    justifyContent: 'space-evenly',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifyEnd: {
    justifyContent: 'flex-end',
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignEnd: {
    alignItems: 'flex-end',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  alignStretch: {
    alignItems: 'stretch',
  },
  alignBaseline: {
    alignItems: 'baseline',
  },
  alignContentCenter: {
    alignContent: 'center',
  },
  alignContentEnd: {
    alignContent: 'flex-end',
  },
  alignContentStart: {
    alignContent: 'flex-start',
  },
  alignContentStretch: {
    alignContent: 'stretch',
  },
  alignContentBetween: {
    alignContent: 'space-between',
  },
  alignContentAround: {
    alignContent: 'space-around',
  },
  gap: {
    gap: 5,
  },
  padding: {
    padding: padding,
  },
  paddingHeader: {
    paddingVertical: padding / 2,
    paddingHorizontal: padding / 2,
  },
  paddingVertical: {
    paddingVertical: padding,
  },
  paddingHorizontal: {
    paddingHorizontal: padding,
  },
  paddingTop: {
    paddingTop: padding,
  },
  paddingBottom: {
    paddingBottom: padding,
  },
  paddingLeft: {
    paddingLeft: padding,
  },
  paddingRight: {
    paddingRight: padding,
  },
  margin: {
    margin: padding,
  },
  marginVertical: {
    marginVertical: padding,
  },
  marginHorizontal: {
    marginHorizontal: padding,
  },
  marginTop: {
    marginTop: padding,
  },
  marginBottom: {
    marginBottom: padding,
  },
  marginLeft: {
    marginLeft: padding,
  },
  marginRight: {
    marginRight: padding,
  },
  border: {
    borderWidth: 1,
    borderColor: theme.colors.backdrop,
  },
  primary: {
    color: theme.colors.primary,
  },
  secondary: {
    color: theme.colors.secondary,
  },
  primaryContainer: {
    backgroundColor: theme.colors.primaryContainer,
  },
  secondaryContainer: {
    backgroundColor: theme.colors.secondaryContainer,
  },
  onPrimaryContainer: {
    color: theme.colors.onPrimaryContainer,
  },
  onSecondaryContainer: {
    color: theme.colors.onSecondaryContainer,
  },
  boxShadow: {
    shadowColor: theme.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  start: {
    left: 0,
  },
  end: {
    right: 0,
  },
  top: {
    top: 0,
  },
  bottom: {
    bottom: 0,
  },
  wrap: {
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: '100%',
  },
  widthAuto: {
    width: 'auto',
  },
  fullHeight: {
    height: '100%',
  },
  heightAuto: {
    height: 'auto',
  },
  anthemButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: padding / 2,
    backgroundColor: theme.colors.secondaryContainer,
    color: theme.colors.secondary,
  },
  searchInput: {
    backgroundColor: theme.colors.primaryContainer,
  },
  iconButton: {
    padding: padding / 2,
    borderRadius: 50,
  },
  iconButtonActive: {
    backgroundColor: theme.colors.primaryContainer,
  },
  iconButtonDisabled: {
    opacity: 0.5,
  },
  iconButtonActiveDisabled: {
    backgroundColor: theme.colors.primaryContainer,
    opacity: 0.5,
  },
  iconButtonHighlight: {
    backgroundColor: theme.colors.primaryContainer,
  },
  textMuted: {
    color: color(theme.colors.onBackground).alpha(0.5).string(),
  },
  buttonMainMenu: {
    borderRadius: 50,
  },
});
