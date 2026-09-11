import { StyleSheet } from 'react-native';
import { Theme } from './theme';

export const counterStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.lg,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: Theme.colors.surface,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    ...Theme.shadows.card,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: Theme.colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: Theme.spacing.sm,
  },
  counterValue: {
    fontSize: 72,
    fontWeight: '800',
    color: Theme.colors.textPrimary,
    marginVertical: Theme.spacing.md,
  },
  messageBanner: {
    backgroundColor: Theme.colors.accent,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.md,
    borderRadius: Theme.borderRadius.sm,
    marginBottom: Theme.spacing.md,
  },
  messageText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 14,
  },
  controlsRow: {
    flexDirection: 'row',
    gap: Theme.spacing.md,
    width: '100%',
    marginBottom: Theme.spacing.md,
  },
  actionButton: {
    flex: 1,
    backgroundColor: Theme.colors.primary,
    paddingVertical: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.4,
  },
  resetButton: {
    width: '100%',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Theme.colors.surfaceBorder,
    paddingVertical: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.md,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  resetButtonText: {
    color: Theme.colors.textSecondary,
    fontWeight: '600',
    fontSize: 14,
  },
});