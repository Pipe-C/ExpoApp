import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const welcomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  glowTop: {
    position: 'absolute',
    top: -100,
    right: -40,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: Theme.colors.glowTop,
  },
  glowBottom: {
    position: 'absolute',
    bottom: -100,
    left: -40,
    width: 340,
    height: 340,
    borderRadius: 170,
    backgroundColor: Theme.colors.glowBottom,
  },
  errorText: {
    color: Theme.colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
  },
});